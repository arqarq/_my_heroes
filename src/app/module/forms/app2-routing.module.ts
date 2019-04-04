import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {App2Component} from './app2.component';

const ROUTES: Routes = [
  {
    path: 'ng-forms',
    component: App2Component
  },
  {
    path: 'forms',
    redirectTo: 'ng-forms',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class App2RoutingModule {
}
