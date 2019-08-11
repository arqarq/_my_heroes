import { Injectable } from '@angular/core';
import { ProductParamsType, ShippingOptions } from '../shop.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartServiceModule } from './cart-service.module';

@Injectable({
  providedIn: CartServiceModule
})
export class CartService {
  private items: Array<ProductParamsType> = [];

  constructor(private http: HttpClient) {
  }

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

  getShippingPrices<T = ShippingOptions[]>(): Observable<T> {
    return this.http.get<T>('assets/shipping.json');
  }
}
