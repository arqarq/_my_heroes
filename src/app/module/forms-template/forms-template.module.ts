import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { FooterModule } from '../../gen_modules/footer/footer.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Translate2dWithFixForHalfPixelInChromeDirective } from '../../directive/translate2d-with-fix-for-half-pixel-in-chrome.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    FormComponent,
    Translate2dWithFixForHalfPixelInChromeDirective
  ]
})
export class FormsTemplateModule {
}
