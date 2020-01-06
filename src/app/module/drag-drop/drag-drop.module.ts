import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './drag-drop.component';
import { FooterModule } from '../../gen_modules/footer/footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DragDropComponent],
  imports: [
    CommonModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: DragDropComponent,
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class DragDropModule {
}
