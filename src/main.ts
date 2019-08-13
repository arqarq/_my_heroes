import { enableProdMode, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { StartModule } from './app/start.module';

if (environment.production) {
  enableProdMode();
}

console.log('----------------------------------------------------------------------' +
  '---------------------------------------------------------------------- %cnode / browser? %c' +
  (environment.isNode ? 'node' : 'browser'), 'color: red', 'color: red; font-weight: bolder');
console.log('----------------------------------------------------------------------' +
  '---------------------------------------------------------------------- %cPROD? %c' + environment.production,
  'color: red', 'color: red; font-weight: bolder');

platformBrowserDynamic(
  // [{provide: LOCALE_ID, useValue: 'pl'}] // dla 'ng build' wystarczy tylko tu, bez registerLocaleData() w AppModule
)
  .bootstrapModule(StartModule, {
    missingTranslation: MissingTranslationStrategy.Warning // for JIT, for AOT put in 'angular.json' only
    // providers: [{provide: LOCALE_ID, useValue: 'pl'}] // zmiana w Angular v9.0.0-next.2?
  })
  .catch((err) => console.error(err));
