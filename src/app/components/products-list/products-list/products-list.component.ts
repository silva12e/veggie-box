import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products: [IProduct];
  public productsIndex = {
    fruit: 0,
    greens: 1,
    rootsAndStems: 2,
    sproutsAndHerbs: 3
  };

  public constructor() { }

  ngOnInit() {
    this.initComponentProperties();
  }
  private initComponentProperties(): void {
    this.products = [
      {
        name: 'Fruits',
        description: 'Okay, So fruits aren\'t vegetables. Everyone get confused sometimes.',
        imgUrl: 'https://res.cloudinary.com/eesportfolio/image/upload/v1537235319/fruits.png'
      },
      {
        name: 'Greens',
        description: 'Make salad bases, or add a leafy crunch to sandwiches.',

        imgUrl: 'https://res.cloudinary.com/eesportfolio/image/upload/v1537235322/greens.png'
      },
      {
        name: 'Roots & Stems',
        description: 'Sweet and/or savoury, roots add substance to a dish.',
        imgUrl: 'https://res.cloudinary.com/eesportfolio/image/upload/v1537235318/others.png'
      },
      {
        name: 'Sprouts & Herbs',
        description: 'Garlic, chives, dill… add some depth to dishes.',
        imgUrl: 'https://res.cloudinary.com/eesportfolio/image/upload/v1537676975/top-view-1248955_640.jpg'
      },

      ];
  }

}
