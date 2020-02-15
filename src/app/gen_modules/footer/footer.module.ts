import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoooterComponent, PaneDirective } from './foooter.component';

@NgModule({
  declarations: [
    FoooterComponent,
    PaneDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FoooterComponent,
    PaneDirective
  ]
})
export class FooterModule {
}
