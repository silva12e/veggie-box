import { Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class CounterService {

  public counterEvent: EventEmitter<number> = new EventEmitter<number>();
  public limitReachedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  private counter: number;
  private currentCounter: number;

  constructor() {
    this.currentCounter = this.counter;
  }

  public setCounter(counter): void {
    this.counter = counter;
  }

  public getCounter(): number {
    return this.counter;
  }

  public incrementCounter(limit): void {
    if (this.counter !== limit) {
      this.counter++;
      this.counterEvent.emit(this.counter);
    }
    if (this.counter === 6 ) {
      this.limitReachedEvent.emit(false);
    }
  }

  public decrementCounter(minimum): void {
    this.limitReachedEvent.emit(true);
    if (this.counter !== minimum) {
      this.counter--;
      this.counterEvent.emit(this.counter);
    }

  }
}
