import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChooserComponent } from '../../index6';
import { ChooserRoutingModule } from '../../index7';

@NgModule({
  declarations: [ChooserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChooserRoutingModule
  ]
})
export class ChooserModule {
}
