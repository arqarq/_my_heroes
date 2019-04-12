import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesModule } from './heroes/heroes.module';
import { MessagesModule } from '../../gen_modules/messages/messages.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesModule,
    HeroesModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent
  ]
})
export class CrisisModule {
}
