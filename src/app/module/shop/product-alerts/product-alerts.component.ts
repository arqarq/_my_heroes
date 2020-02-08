import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjectPassedByEventDTO, ProductParamsType } from '../shop.types';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent {
  @Input() product: ProductParamsType;
  @Output() notify = new EventEmitter<ObjectPassedByEventDTO>();
}
