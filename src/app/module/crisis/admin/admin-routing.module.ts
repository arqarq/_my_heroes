import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  AdminComponent,
  AdminDashboardComponent,
  AuthGuard,
  ClearComponent,
  ManageCrisesComponent,
  ManageHeroesComponent
} from './index4';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'clear',
            component: ClearComponent
          },
          {
            path: 'crises',
            component: ManageCrisesComponent
          },
          {
            path: 'heroes',
            component: ManageHeroesComponent
          },
          {
            path: '',
            component: AdminDashboardComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
