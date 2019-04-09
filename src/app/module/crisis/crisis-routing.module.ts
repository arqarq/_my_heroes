import { NgModule } from '@angular/core';
import { CrisisCenterComponent } from './crisis-center.component';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'crisis-center',
        component: CrisisListComponent
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
