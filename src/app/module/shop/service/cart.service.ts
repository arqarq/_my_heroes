import { Injectable } from '@angular/core';
import { ShopModule } from '../shop.module';
import { ProductParamsType } from '../shop.types';

@Injectable({
  providedIn: ShopModule
})
export class CartService {
  private items = new Array<ProductParamsType>();

  clearCart() {
    this.items = [];
    return this.items;
  }

  private addToCart(product: ProductParamsType) {
    this.items.push(product);
  }

  private getItems() {
    return this.items;
  }
}
