import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent, AdminDashboardComponent, AuthGuard, ClearComponent, ManageCrisesComponent, ManageHeroesComponent } from './index';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
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
        ],
        canActivateChild: [
          AuthGuard
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
