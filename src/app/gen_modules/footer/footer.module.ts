import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoooterComponent, PaneDirective } from './foooter.component';
import { Footer2Component } from './footer2.component';

@NgModule({
  declarations: [
    FoooterComponent,
    Footer2Component,
    PaneDirective
  ],
  exports: [
    FoooterComponent,
    Footer2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FooterModule {
}
