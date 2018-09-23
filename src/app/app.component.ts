import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hideNotification = true;

  public constructor(
    public counterService: CounterService
  ) {
    this.counterService
      .limitReachedEvent
      .subscribe((state) => {
        this.hideNotification = state;
    });
  }
}
