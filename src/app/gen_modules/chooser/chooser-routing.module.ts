import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {
        path: 'a',
        loadChildren: ''
      },
      {
        path: 'b',
        loadChildren: ''
      }
    ]
  )],
  exports: [RouterModule]
})
export class ChooserRoutingModule {
}
