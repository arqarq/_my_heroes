import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
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
    ])]
})
export class ShopModule {
}
