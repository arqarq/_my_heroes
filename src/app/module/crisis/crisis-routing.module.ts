import { NgModule } from '@angular/core';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';

const ROUTES: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'superheroes',
        loadChildren: './heroes/heroes.module#HeroesModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
        // canLoad: [AuthGuard]
      },
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'crisis-center',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CrisisRoutingModule {
}
