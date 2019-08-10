import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './component/crisis-center/crisis-center.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { MessagesModule } from '../../gen_modules/messages/messages.module';
import { CrisisCenterHomeComponent } from './component/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './component/crisis-detail/crisis-detail.component';
import { FormsModule } from '@angular/forms';
import { AuthServiceModule } from './auth/service/auth-service.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    AuthServiceModule, // circular dependency solved
    CrisisRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
    // ComposeMessageComponent // użyte w StartModule
  ]
  // providers: [ // old way DI
  //   CrisisDetailResolverService,
  //   CrisisListComponent,
  //   CanDeactivateGuard
  // ]
})
export class CrisisModule {
}
