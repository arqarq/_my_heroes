import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const heroesRoutes: Routes = [
  {
    path: 'heroess',
    component: HeroListComponent,
    data: {
      animation: 'heroesq'
    }
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    data: {
      animation: 'heroq'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
