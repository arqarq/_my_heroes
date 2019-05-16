import { NgModule } from '@angular/core';
import { CrisisCenterComponent } from './component/crisis-center/crisis-center.component';
import { RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './component/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './component/crisis-center-home/crisis-center-home.component';
import { ComposeMessageComponent } from './component/compose-message/compose-message.component';
import { CanDeactivateGuard } from './heroes/can-deactivate.guard';
import { CrisisDetailResolverService } from './component/crisis-detail/crisis-detail-resolver.service';
import { AuthGuard } from './admin/auth.guard';

export function adminMatch(url: UrlSegment[]): UrlMatchResult {
  let result;
  if (url.length >= 1 && url[0].path.startsWith('admin')) {
    result = url;
    if (url.length === 2) {
      // result.shift();
      // result.shift();
      // result = null;
      result = {consumed: result};
    } else {
      result = {consumed: result};
    }
  } else {
    result = null;
  }
  const output = [];
  if (result) {
    for (const war of url) {
      output.push(war.path);
    }
  }
  console.log('CrisisRoutingModule # adminMatch # result: ' + (result ? output : '-'));
  return result;
}

const ROUTES: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'superheroes',
        loadChildren: './heroes/heroes.module#HeroesModule',
        data: {
          preload: true
        }
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
        // matcher: adminMatch, // zastępuje "path"
        loadChildren: 'src/app/module/crisis/admin/admin.module#AdminModule', // całkowicie bezwzględna (tsconfig.json)
        canLoad: [AuthGuard]
      },
      // {
      //   path: 'admin(popup:compose)',
      //   redirectTo: 'admin',
      //   pathMatch: 'prefix' // lub 'full', przy wewn. ścieżka to bez znaczenia
      // },
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
