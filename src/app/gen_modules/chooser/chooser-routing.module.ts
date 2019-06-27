import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChooserComponent } from './chooser.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: ChooserComponent
    }
  ])],
  exports: [RouterModule]
})
export class ChooserRoutingModule {
}
