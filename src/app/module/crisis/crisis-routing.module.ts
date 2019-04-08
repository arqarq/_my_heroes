import { NgModule } from '@angular/core';
import { CrisisCenterComponent } from './crisis-center.component';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'crisis-center',
        component: CrisisListComponent
      },
      {
        path: 'heroes',
        component: HeroListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CrisisRoutingModule {
}
