import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App2Module} from './module/forms/app2.module';
import {AppModule} from './module/heroes/app.module';
import {StartRoutingModule} from './start-routing.module';
import {StartComponent} from './start.component';
import {ChooserComponent} from './component/chooser/chooser.component';
import {Notfound404Component} from './component/notfound404/notfound404.component';

@NgModule({
  imports: [
    BrowserModule,
    StartRoutingModule,
    App2Module,
    AppModule
  ],
  declarations: [
    StartComponent,
    ChooserComponent,
    Notfound404Component
  ],
  bootstrap: [StartComponent],
  providers: []
})
export class StartModule {
}
