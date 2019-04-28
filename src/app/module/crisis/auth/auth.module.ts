import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LocalStorageService } from '../../../service/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LocalStorageService
  ]
})
export class AuthModule {
}
