import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, AdminDashboardComponent, ClearComponent, ManageCrisesComponent, ManageHeroesComponent } from './index';
import { ForComponentsModule } from '../../../component/for-components.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ForComponentsModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    ClearComponent
  ]
  // providers: [ // old way DI
  //   AuthGuard
  // ]
})
export class AdminModule {
}
