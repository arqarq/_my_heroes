import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {StartComponent} from './start.component';
import {RouterModule} from '@angular/router';
import {StartRoutingModule} from './start-routing.module';
import {Notfound404Component} from './notfound404.component';
import {ChooserComponent} from './chooser.component';

@NgModule({
  declarations: [
    StartComponent,
    Notfound404Component,
    ChooserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StartRoutingModule
  ],
  bootstrap: [StartComponent],
  providers: [Title]
})
export class StartModule {
}
