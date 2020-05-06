import { NgModule } from '@angular/core';
import { PaneDirective } from './pane.directive'

@NgModule({
  declarations: [PaneDirective],
  exports: [PaneDirective]
})
export class ForDirectivesModule {
}
