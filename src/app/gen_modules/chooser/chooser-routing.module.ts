import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChooserComponent } from '../../index6';

const ROUTES: Route[] = [
  {
    path: '',
    component: ChooserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ChooserRoutingModule {
}
