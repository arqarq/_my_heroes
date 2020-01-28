import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengScrollpanelComponent } from './primeng-scrollpanel.component';
import { ScrollPanelModule } from './scrollpanel/scrollpanel';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../../gen_modules/footer/footer.module';

@NgModule({
  declarations: [
    PrimengScrollpanelComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    ScrollPanelModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrimengScrollpanelComponent,
        pathMatch: 'full'
      }
    ])]
})
export class PrimengScrollpanelModule {
}
