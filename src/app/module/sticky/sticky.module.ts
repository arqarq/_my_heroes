import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyComponent } from './sticky.component';
import { FooterModule } from '../../gen_modules/footer/footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StickyComponent],
  imports: [
    CommonModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: StickyComponent,
        pathMatch: 'full'
      }
    ])]
})
export class StickyModule {
}
