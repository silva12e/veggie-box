import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public counter = 0;
  public descendingCounter = 6;
  private WIDTH = 16.6666666667;
  private currentWidth = 0;

  public constructor(
    public counterService: CounterService
  ) {
    this.counterService.setCounter(this.counter);
    this.counterService.counterEvent
      .subscribe(counter => {
      if (this.counter > counter ) {
        this.remove();
      } else {
        this.add();
      }
    });
  }

  ngOnInit() {
  }

  public add() {
    if (this.counter !== 6) {
      this.currentWidth = this.currentWidth + this.WIDTH;
      this.counter++;
      const elem = document.getElementById('myBar');
      elem.style.width = this.currentWidth + '%';
      elem.style.transition = 'width 0.5s ease-in-out';
      this.descendingCounter--;
    }

  }

  public remove() {
    if (this.counter !== 0) {
      this.currentWidth = this.currentWidth - this.WIDTH;
      this.counter--;
      const bar = document.getElementById('myBar');
      bar.style.width = this.currentWidth + '%';
      bar.style.transition = 'width 0.5s ease-in-out';
      this.descendingCounter++;
    }

  }

}
