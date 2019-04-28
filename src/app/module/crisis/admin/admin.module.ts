import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthGuard } from '../auth/auth.guard';
import { LocalStorageService } from '../../../service/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ],
  providers: [
    AuthGuard,
    LocalStorageService
  ]
})
export class AdminModule {
}
