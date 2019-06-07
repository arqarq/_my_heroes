import { Injectable } from '@angular/core';
import { ShopModule } from '../shop.module';
import { ProductParamsType } from '../shop.types';

@Injectable({
  providedIn: ShopModule
})
export class CartService {
  private items: Array<ProductParamsType> = [];

  clearCart(): ProductParamsType[] {
    this.items = [];
    return this.items;
  }

  addToCart(product: ProductParamsType): void {
    this.items.push(product);
  }

  getItems(): ProductParamsType[] {
    return this.items;
  }
}
