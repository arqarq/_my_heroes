import { NgModule } from '@angular/core';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CrisisDetailResolverService } from './crisis-detail/crisis-detail-resolver.service';

const ROUTES: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'superheroes',
        loadChildren: './heroes/heroes.module#HeroesModule'
      },
      {
        path: 'login',
        // component: LoginComponent
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [
              CanDeactivateGuard
            ],
            // canDeactivate: [CanDeactivate] // TODO do with component specific guard
            resolve: {
              crisisHere: CrisisDetailResolverService
            }
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
