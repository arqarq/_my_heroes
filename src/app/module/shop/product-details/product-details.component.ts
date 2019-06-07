import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../repository/products';
import { ProductParamsType } from '../shop.types';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductParamsType;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.product = PRODUCTS[+params.get('productId')];
      }
    );
  }

  addToCart(product: ProductParamsType) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
