import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, AdminDashboardComponent, ClearComponent, ManageCrisesComponent, ManageHeroesComponent } from './index';
import { ForComponentsModule } from '../../../component/for-components.module';
import { TooltipModule } from 'primeng/tooltip'

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ForComponentsModule,
    TooltipModule
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
