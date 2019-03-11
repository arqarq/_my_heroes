import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';
import {HeroesComponent} from '../component/heroes/heroes.component';
import {HeroDetailComponent} from '../component/hero-detail/hero-detail.component';
import {MessagesComponent} from '../component/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from '../component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
