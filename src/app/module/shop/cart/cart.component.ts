import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductParamsType } from '../shop.types';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  items: Array<ProductParamsType> = [];
  private checkoutForm: FormGroup;

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
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cdr.detectChanges();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.cdr.detectChanges();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.clearCart();
    this.checkoutForm.reset();
  }
}
