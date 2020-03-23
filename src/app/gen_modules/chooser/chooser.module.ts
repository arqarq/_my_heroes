import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChooserComponent } from './chooser.component';
import { ChooserRoutingModule } from './chooser-routing.module';
import { FooterForChooserComponent } from './footer-for-chooser/footer-for-chooser.component';

@NgModule({
  declarations: [
    ChooserComponent,
    FooterForChooserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChooserRoutingModule
  ]
})
export class ChooserModule {
}
