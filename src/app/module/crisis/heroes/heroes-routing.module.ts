import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailResolverService } from './hero-detail/hero-detail-resolver.service';
import { HeroListResolverService } from './hero-list/hero-list-resolver.service';
import { CanDeactivateGuard } from './can-deactivate.guard';

const heroesRoutes: Routes = [
  {
    path: '',
    component: HeroListComponent,
    resolve: {
      heroesHere: HeroListResolverService
    },
    data: {
      animation: 'heroesq'
    }
  },
  {
    path: 'superhero/:id',
    component: HeroDetailComponent,
    resolve: {
      hero: HeroDetailResolverService
    },
    data: {
      animation: 'heroq'
    },
    canDeactivate: [
      CanDeactivateGuard
    ]
  },
  {
    path: 'hero/:id',
    redirectTo: 'superhero/:id'
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
