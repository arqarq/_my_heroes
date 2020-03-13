import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../repository/products';
import { ProductParamsType } from '../shop.types';
import { CartService } from '../service/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: ProductParamsType;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.subscription.add(this.route.paramMap.subscribe(
      (params) => {
        this.product = {...PRODUCTS[+params.get('productId')]};
      }
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToCart(product: ProductParamsType) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
