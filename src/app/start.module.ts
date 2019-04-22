import { NgModule } from '@angular/core';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { ChooserComponent } from './component/chooser/chooser.component';
import { NotFound404Component } from './component/notfound404/notfound404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { AuthModule } from './module/crisis/auth/auth.module';
import { ComposeMessageComponent } from './module/crisis/compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // BrowserModule, // not needed gdy są animacje!
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AuthModule, // 1 komponent użyty - login; musi być przed '/**'
    StartRoutingModule // kolejność routingów ma znaczenie
    // AppModule, // (stare heroes) "lazy child", nie użyty żaden komponent do załadowania
    // App2Module, // (forms) nie ma żadnego routera, więc psuje jak jest tu umieszczony, i także "lazy child"
    // CrisisModule // jest użyty 1 komponent w outlecie popup, ale "lazy" więc nie w declarations, i może być po '/**'
  ],
  declarations: [
    StartComponent,
    ChooserComponent,
    NotFound404Component,
    ComposeMessageComponent
  ],
  bootstrap: [StartComponent]
})
export class StartModule {
}
