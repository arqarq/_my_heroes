import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, AdminDashboardComponent, ClearComponent, ManageCrisesComponent, ManageHeroesComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
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
