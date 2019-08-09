import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChooserComponent } from './chooser.component';
import { ChooserRoutingModule } from './chooser-routing.module';

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
