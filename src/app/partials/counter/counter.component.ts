import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter$: Observable<any>;
  @Input() public limit: number;

  constructor(
    private store: Store<number>
  ) {
    /*
        Select returns an observable of the appropriate slice of state (reducer) from store.
        This is equivalent to store.map(state => state['counter']).distinctUntilChanged()
     */
    this.counter$ = this.store.select<any>('counter');
    this.store.dispatch({type: 'INCREMENT'});

  }
  /*
      The only way to modify state in store is through dispatched actions.
      Actions require a type (string) and optional payload.
      This type will match up to a case in one of your application reducers,
      specifying how this action will create a new representation
      of that particular section of state.
   */
  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }
}
