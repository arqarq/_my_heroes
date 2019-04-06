import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../../component/dashboard/dashboard.component';
import { HeroesComponent } from '../../component/heroes/heroes.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: AppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'details',
        component: HeroesComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  }
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
  // {path: '', component: App2Component}
  // {
  //   path: '',
  //   redirectTo: '/app2',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
