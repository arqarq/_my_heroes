import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer2Component } from './footer2.component';
import { FoooterComponent } from './foooter.component'
import { PaneDirective } from '../../directive/pane.directive'
import { ForDirectivesModule } from '../../directive/for-directives.module'

@NgModule({
  imports: [
    RouterModule,
    ForDirectivesModule
  ],
  declarations: [
    FoooterComponent,
    Footer2Component
  ],
  exports: [
    FoooterComponent,
    Footer2Component,
    PaneDirective
  ]
})
export class FooterModule {
}
