import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './component/notfound404/notfound404.component';
import { ChooserComponent } from './component/chooser/chooser.component';
import { ComposeMessageComponent } from './module/crisis/component/compose-message/compose-message.component';

const ROUTES: Routes = [
  {
    path: 'forms',
    loadChildren: './module/forms/app2.module#App2Module'
  },
  {
    path: 'ng-heroes',
    loadChildren: './module/heroes/app.module#AppModule'
  },
  {
    path: 'crisis',
    loadChildren: './module/crisis/crisis.module#CrisisModule'
  },
  {
    path: 'choose',
    component: ChooserComponent
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: '',
    redirectTo: '/choose',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {enableTracing: false, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class StartRoutingModule {
}
