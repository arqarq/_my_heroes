import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ProductParamsType = {
  'description', 'name', 'price': number | string
};
export type ObjectPassedByEventDTO = {
  wasCtrlKeyPressed: boolean,
  productPassedViaEvent: ProductParamsType
};

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: ProductParamsType;
  @Output() notify = new EventEmitter<ObjectPassedByEventDTO>();
}
