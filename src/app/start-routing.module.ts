import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { NotFound404Component, ObservComponent, TemplateRefExampleComponent } from './component';
import { SelectivePreloadingStrategyService } from './service';
import { ComposeMessageComponent } from './module/crisis/component/compose-message/compose-message.component';

function isComposeMatched(url: UrlSegment[]): UrlMatchResult {
  const result = url.length && url[0].path.startsWith('compose') ? {consumed: url} : null;
  console.log('CrisisRoutingModule # isComposeMatched() # url:', JSON.parse(JSON.stringify(url)));
  return result;
}

const ROUTES: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('./module/forms/app2.module').then((m) => m.App2Module),
    data: {
      preload: true
    }
  },
  {
    path: 'form-template',
    loadChildren: () => import('./module/forms-template/forms-template.module').then((m) => m.FormsTemplateModule)
  },
  {
    path: 'form-reactive',
    loadChildren: () => import('./module/forms-reactive/forms-reactive.module').then((m) => {
      return m.FormsReactiveModule;
    })
  },
  {
    path: 'scrollpanel',
    loadChildren: () => import('./module/primeng-scrollpanel/primeng-scrollpanel.module').then((m) => m.PrimengScrollpanelModule)
  },
  {
    path: 'dragdrop',
    loadChildren: () => import('./module/drag-drop/drag-drop.module').then((m) => m.DragDropModule),
    data: {
      preload: true
    }
  },
  {
    path: 'sticky',
    loadChildren: () => import('./module/sticky/sticky.module').then((m) => m.StickyModule),
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
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: false,
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: SelectivePreloadingStrategyService,
      useHash: false // PathLocationStrategy
      // useHash: true // HashLocationStrategy
    })
  ],
  // providers: [SelectivePreloadingStrategyService], // old way DI
  exports: [RouterModule]
})
export class StartRoutingModule {
}
