import { NgModule } from '@angular/core';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { NotFound404Component } from './component/notfound404/notfound404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { ComposeMessageComponent } from './module/crisis/component/compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    // ChooserComponent,
    NotFound404Component,
    ComposeMessageComponent
  ],
  bootstrap: [StartComponent]
})
export class StartModule {
  readonly replacer;

  constructor(private router: Router) {
    this.replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.log('StartModule # router.config: ', JSON.stringify(this.router.config, this.replacer, 2));
  }
}
