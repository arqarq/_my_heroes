import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FormDataNow, ProductParamsType } from '../shop.types';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  items: Array<ProductParamsType> = [];
  checkoutForm: FormGroup;
  done: boolean;

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {
    this.cdr.detach();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
    this.done = false;
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cdr.detectChanges();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.cdr.detectChanges();
  }

  onSubmit(customerData: FormDataNow, items: ProductParamsType[]) {
    items.forEach((item) => delete item.description); // slowest
    // items.forEach((item) => item.description = undefined);
    // items.forEach((item) => item.description = null); // fastest
    console.warn('Your order has been submitted - data:', JSON.stringify(customerData, null, 1));
    console.warn('Your order has been submitted - items:', JSON.stringify(items, null, 1));
    alert('Sent to: ' + JSON.stringify(customerData, null, 1));
    alert('You\'ve bought: ' + JSON.stringify(items, null, 1));
    this.done = true;
    this.clearCart();
    this.checkoutForm.reset();
  }
}
