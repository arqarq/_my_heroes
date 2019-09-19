import { Component } from '@angular/core';
import { PRODUCTS } from '../repository/products';
import { ObjectPassedByEventDTO, ProductParamsType } from '../shop.types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products: {[key: string]: number | string}[] = PRODUCTS;
  products: ProductParamsType[] = PRODUCTS;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(fromEvent: ObjectPassedByEventDTO) {
    window.alert('You will be notified when the product goes on sale.\n\n' +
      '...test przekazania obiektu przez event:\n' +
      JSON.stringify(fromEvent.productPassedViaEvent, null, 1) +
      '\n\n...czy trzymałeś Ctrl przy kliknięciu?: ' + (fromEvent.wasCtrlKeyPressed ? 'TAK' : 'NIE'));
  }
}
