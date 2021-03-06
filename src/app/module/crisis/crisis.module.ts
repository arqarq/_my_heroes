import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './component/crisis-center/crisis-center.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { MessagesModule } from '../../gen_modules/messages/messages.module';
import { CrisisCenterHomeComponent } from './component/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './component/crisis-detail/crisis-detail.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardModule } from './admin/service/auth.guard.module';
import { AuthServiceModule } from './auth/service/auth-service.module';
import { DialogServiceModule } from './service/dialog-service.module';
import { CanDeactivateGuardModule } from './service/can-deactivate-guard.module';
import { FooterModule } from '../../gen_modules/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    AuthServiceModule, // circular dependency solved
    AuthGuardModule, // circular dependency solved
    CanDeactivateGuardModule, // circular dependency solved
    DialogServiceModule, // circular dependency solved
    CrisisRoutingModule,
    FooterModule
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
