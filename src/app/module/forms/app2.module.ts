import { NgModule } from '@angular/core';
import { App2Component } from './app2.component';
import { CommonModule } from '@angular/common';
import { App2RoutingModule } from './app2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    App2RoutingModule
  ],
  declarations: [App2Component]
})
export class App2Module {
}
