import { Component } from '@angular/core';
import { PRODUCTS } from '../repository/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: {[key: string]: number | string}[] = PRODUCTS;

  private share() {
    window.alert('The product has been shared!');
  }
}
