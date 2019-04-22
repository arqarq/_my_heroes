import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { MessagesModule } from '../../gen_modules/messages/messages.module';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
    // ComposeMessageComponent // użyte w StartModule
  ]
})
export class CrisisModule {
}
