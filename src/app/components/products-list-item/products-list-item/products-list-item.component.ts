import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../models/product.model';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.css']
})
export class ProductsListItemComponent implements OnInit {

  @Input() public item: IProduct;
  public counter: number;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.counter = this.counterService.getCounter();
  }

  public increaseCounter(): void {
    if (this.counterService.getCounter() < 6 ) {
      this.counter++;
      this.counterService.incrementCounter(6);
    }
  }

  public decreaseCounter(): void {
    if (this.counter > 0 ) {
      this.counter--;
      this.counterService.decrementCounter(0);
    }
  }

}
