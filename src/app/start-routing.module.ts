import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './component/notfound404/notfound404.component';
import { ChooserComponent } from './component/chooser/chooser.component';
import { ComposeMessageComponent } from './module/crisis/component/compose-message/compose-message.component';
import { SelectivePreloadingStrategyService } from './module/crisis/service/selective-preloading-strategy.service';

const ROUTES: Routes = [
  {
    path: 'forms',
    loadChildren: './module/forms/app2.module#App2Module',
    data: {
      preload: true
    }
  },
  {
    path: 'ng-heroes',
    loadChildren: './module/heroes/app.module#AppModule',
    data: {
      preload: true
    }
  },
  {
    path: 'crisis',
    loadChildren: './module/crisis/crisis.module#CrisisModule',
    data: {
      preload: true
    }
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
  imports: [RouterModule.forRoot(
    ROUTES,
    {
      enableTracing: false,
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: SelectivePreloadingStrategyService,
      useHash: false // PathLocationStrategy
      // useHash: true // HashLocationStrategy
    }
  )],
  // providers: [SelectivePreloadingStrategyService], // old way DI
  exports: [RouterModule]
})
export class StartRoutingModule {
}
