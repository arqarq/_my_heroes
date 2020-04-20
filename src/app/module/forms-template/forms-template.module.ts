import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { FooterModule } from '../../gen_modules/footer/footer.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Translate2dWithFixForHalfPixelInChromeDirective } from '../../directive/translate2d-with-fix-for-half-pixel-in-chrome.directive';
import { FormsModule } from '@angular/forms';
import { ForComponentsModule } from '../../component/for-components.module';

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
    ]),
    ForComponentsModule
  ],
  declarations: [
    FormComponent,
    Translate2dWithFixForHalfPixelInChromeDirective
  ]
})
export class FormsTemplateModule {
}
