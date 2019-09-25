import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { StartRoutingModule } from './start-routing.module';
import {
  ComposeMessageComponent,
  FoooterComponent,
  NotFound404Component,
  ObservComponent,
  RowsComponent,
  StartComponent,
  TemplateRefExampleComponent
} from './index';
import { InMemoryDataService } from './service/index-services';
import { AdditionalDirective } from './directive/additional.directive';

@NgModule({
  imports: [
    // BrowserModule, // not needed gdy są animacje!
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {dataEncapsulation: false, passThruUnknownUrl: true}
    ),
    // AuthModule, // 1 komponent użyty - login; musi być przed '/**'
    StartRoutingModule, // kolejność routingów ma znaczenie
    // AppModule, // (stare heroes) "lazy child", nie użyty żaden komponent do załadowania
    // App2Module, // (forms) nie ma żadnego routera, więc psuje jak jest tu umieszczony, i także "lazy child"
    // CrisisModule // jest użyty 1 komponent w outlecie popup, ale "lazy" więc nie w declarations, i może być po '/**'
    ServiceWorkerModule.register(
      'ngsw-worker.js',
      {enabled: environment.production}
    )
  ],
  declarations: [
    StartComponent,
    AdditionalDirective,
    // ChooserComponent,
    NotFound404Component,
    ComposeMessageComponent,
    FoooterComponent,
    ObservComponent,
    TemplateRefExampleComponent,
    RowsComponent
  ],
  bootstrap: [StartComponent]
})
export class StartModule {
  readonly replacer;

  constructor(private router: Router) {
    this.replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.log('StartModule # router.config:', JSON.stringify(this.router.config, this.replacer, 2));
  }
}
