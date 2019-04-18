import { NgModule } from '@angular/core';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { ChooserComponent } from './component/chooser/chooser.component';
import { NotFound404Component } from './component/notfound404/notfound404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { CrisisModule } from './module/crisis/crisis.module';

@NgModule({
  imports: [
    // BrowserModule, // not needed gdy są animacje!
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    StartRoutingModule, // kolejność routingów ma znaczenie
    // AppModule, // (stare heroes) "lazy child", nie użyty żaden komponent do załadowania
    // App2Module, // (forms) nie ma żadnego routera, więc psuje jak jest tu umieszczony, i także "lazy child"
    CrisisModule // jest użyty 1 komponent w outlecie popup
  ],
  declarations: [
    StartComponent,
    ChooserComponent,
    NotFound404Component
  ],
  bootstrap: [StartComponent]
})
export class StartModule {
}
