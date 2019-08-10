import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { ComposeMessageComponent, NotFound404Component, ObservComponent, TemplateRefExampleComponent } from './index2';
import { SelectivePreloadingStrategyService } from './service/selective-preloading-strategy.service';

export function isComposeMatched(url: UrlSegment[]): UrlMatchResult {
  console.log('CrisisRoutingModule # isComposeMatched() # url: ' + url);
  return url.length && url[0].path.startsWith('compose') ? {consumed: url} : null;
}

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
    loadChildren: () => import('./module/heroes/app.module').then((m) => m.AppModule),
    data: {
      preload: true
    }
  },
  {
    path: 'crisis',
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
    path: 'ng-observables',
    component: ObservComponent
  },
  {
    path: 'ng-templaterefexample',
    component: TemplateRefExampleComponent
  },
  {
    path: '',
    redirectTo: '/choose',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound404Component
  },
  {
    // path: 'compose',
    matcher: isComposeMatched,
    component: ComposeMessageComponent,
    outlet: 'popup'
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
