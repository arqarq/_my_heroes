import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './component/notfound404/notfound404.component';
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
    // loadChildren: './module/heroes/app.module#AppModule',
    loadChildren: () => import('./module/heroes/app.module').then((m) => m.AppModule),
    data: {
      preload: true
    }
  },
  {
    path: 'crisis',
    // loadChildren: './module/crisis/crisis.module#CrisisModule',
    loadChildren: () => import('./module/crisis/crisis.module').then((m) => m.CrisisModule),
    data: {
      preload: true
    }
  },
  {
    path: 'shop',
    loadChildren: () => import('./module/shop/shop.module').then((m) => m.ShopModule),
    data: {
      preload: true
    }
  },
  {
    path: 'choose',
    // component: ChooserComponent
    loadChildren: () => import('./gen_modules/chooser/chooser.module').then((m) => m.ChooserModule),
    data: {
      preload: false
    }
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
