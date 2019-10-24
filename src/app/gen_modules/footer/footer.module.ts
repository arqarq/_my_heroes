import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoooterComponent } from './foooter.component';

@NgModule({
  declarations: [FoooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FoooterComponent]
})
export class FooterModule {
}
