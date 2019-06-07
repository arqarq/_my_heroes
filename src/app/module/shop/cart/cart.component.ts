import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductParamsType } from '../shop.types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  items: Array<ProductParamsType> = [];

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {
    this.cdr.detach();
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cdr.detectChanges();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.cdr.detectChanges();
  }
}
