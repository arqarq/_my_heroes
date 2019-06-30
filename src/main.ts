import { enableProdMode, LOCALE_ID, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StartModule } from './app/start.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(
  [{provide: LOCALE_ID, useValue: 'pl'}]) // dla 'ng build' wystarczy tylko tu, bez registerLocaleData() w AppModule
  .bootstrapModule(StartModule,
    {missingTranslation: MissingTranslationStrategy.Warning}) // for JIT, for AOT in 'angular.json' only
  .catch((err) => console.error(err));
