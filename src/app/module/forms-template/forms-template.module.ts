import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { FooterModule } from '../../gen_modules/footer/footer.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormComponent,
        pathMatch: 'full'
      }
    ])],
  declarations: [FormComponent]
})
export class FormsTemplateModule {
}
