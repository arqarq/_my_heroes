import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import locale from '@angular/common/locales/pl';
import { MoneyPipe } from './service/money.pipe';
import { CartServiceModule } from './service/cart-service.module';

@NgModule({
  declarations: [
    ShopComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    MoneyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CartServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        children: [
          {
            path: '',
            component: ProductListComponent
          },
          {
            path: 'products/:productId',
            component: ProductDetailsComponent
          },
          {
            path: 'cart',
            component: CartComponent
          },
          {
            path: 'shipping',
            component: ShippingComponent
          }
        ]
      }
    ])],
  providers: [CurrencyPipe]
})
export class ShopModule {
  constructor() {
    registerLocaleData(locale); // potrzebne dla 'ng serve', 'ng build' radzi sobie bez tego
  }
}
