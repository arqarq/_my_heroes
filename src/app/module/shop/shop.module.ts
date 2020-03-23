// import locale from '@angular/common/locales/pl';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartServiceModule } from './service/cart-service.module';
import { MoneyPipe } from './service/money.pipe';
import { ShippingComponent } from './shipping/shipping.component';
import { ShopComponent } from './shop.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterModule } from '../../gen_modules/footer/footer.module';

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
    ]),
    FooterModule
  ],
  providers: [CurrencyPipe]
})
export class ShopModule {
  constructor() {
    // registerLocaleData(locale); // potrzebne dla 'ng serve', 'ng build' radzi sobie bez tego
  }
}
