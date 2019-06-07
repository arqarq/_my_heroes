import { Injectable } from '@angular/core';
import { ShopModule } from '../shop.module';
import { ProductParamsType } from '../shop.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: ShopModule
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

  getShippingPrices<T = {type: string, price: number}[]>(): Observable<T> {
    return this.http.get<T>('assets/shipping.json');
  }
}
