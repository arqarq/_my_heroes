import { NgModule } from '@angular/core';
import { App2Component } from './app2.component';
import { CommonModule } from '@angular/common';
import { App2RoutingModule } from './app2-routing.module';
import { FooterModule } from '../../gen_modules/footer/footer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FooterModule,
    App2RoutingModule
  ],
  declarations: [App2Component]
})
export class App2Module {
}
