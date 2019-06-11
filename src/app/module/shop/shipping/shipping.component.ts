import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';
import { ShippingOptions } from '../shop.types';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts: Observable<ShippingOptions[]>;

  constructor(private cartService: CartService) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
