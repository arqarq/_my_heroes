import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisRoutingModule } from './crisis-routing.module';

@NgModule({
  declarations: [CrisisCenterComponent],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule {
}
