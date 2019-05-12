import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { HeroListResolverService } from './hero-list/hero-list-resolver.service';
import { HeroDetailResolverService } from './hero-detail/hero-detail-resolver.service';
import { MarvelService } from '../../../service/marvel.service';
import { CanDeactivateGuard } from '../service/can-deactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroListResolverService,
    HeroDetailResolverService,
    MarvelService,
    CanDeactivateGuard
  ]
})
export class HeroesModule {
}
