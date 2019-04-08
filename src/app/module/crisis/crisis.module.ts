import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule {
}
