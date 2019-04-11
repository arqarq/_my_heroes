import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../../component/heroes/heroes.component';
import { HeroDetailComponent } from '../../component/hero-detail/hero-detail.component';
import { MessagesComponent } from '../../component/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from '../../component/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../service/in-memory-data.service';
import { HeroSearchComponent } from '../../component/hero-search/hero-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {dataEncapsulation: false}
    )
  ],
  exports: [
    MessagesComponent
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ]
})
export class AppModule {
}
