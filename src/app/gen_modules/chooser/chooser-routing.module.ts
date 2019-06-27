import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChooserComponent } from './chooser.component';

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
