import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoot2Component} from './app-root2.component';

const ROUTES: Routes = [
  // {path: 'heroes', component: HeroesComponent},
  // {path: 'dashboard', component: DashboardComponent},
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {
  // path: 'app', component: AppComponent, children:
  //   [
  //     {path: 'heroes', component: HeroesComponent},
  //     {path: 'dashboard', component: DashboardComponent},
  //     {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  //   ]
  // },
  // {path: '', redirectTo: '/app', pathMatch: 'full'},
  // {path: 'detail/:id', component: HeroDetailComponent},
  // {path: '', component: AppRoot2Component}
  {
    path: '',
    redirectTo: '/app2',
    pathMatch: 'full'
  },
  {
    path: 'app2',
    component: AppRoot2Component
  },
  {
    path: 'heroes',
    loadChildren: './app.module#AppModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouting2Module {
}
