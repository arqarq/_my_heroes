import { enableProdMode, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { StartModule } from './app/start.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(
  StartModule,
  {
    missingTranslation: MissingTranslationStrategy.Warning // for JIT, for AOT in 'angular.json'
  })
  .catch(err => console.error(err));
