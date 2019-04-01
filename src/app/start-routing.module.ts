import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Notfound404Component} from './notfound404.component';
import {ChooserComponent} from './chooser.component';

const ROUTES: Routes = [
  {
    path: 'forms',
    loadChildren: './module/forms/app2.module#App2Module'
  },
  {
    path: 'ng-heroes',
    loadChildren: './module/heroes/app.module#AppModule'
  },
  {
    path: 'choose',
    component: ChooserComponent
    // data: {value: 'AAAAA'}
  },
  {
    path: '',
    redirectTo: '/choose',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Notfound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {enableTracing: false})],
  exports: [RouterModule]
})
export class StartRoutingModule {
}
