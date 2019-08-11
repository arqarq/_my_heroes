import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { MarvelService } from '../../../service/marvel.service';
import { HeroListResolverServiceModule } from './hero-list/service/hero-list-resolver-service.module';
import { HeroDetailResolverServiceModule } from './hero-detail/service/hero-detail-resolver-service.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroListResolverServiceModule,
    HeroDetailResolverServiceModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [ // old way DI
    MarvelService // osobna instancja dla Heroes!, w końcu wiadomo o co cho
    // HeroListResolverService,
    // HeroDetailResolverService,
    // CanDeactivateGuard
  ]
})
export class HeroesModule {
}
