import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StartComponent} from './start.component';
import {RouterModule} from '@angular/router';
import {StartRoutingModule} from './start-routing.module';
import {Notfound404Component} from './component/notfound404/notfound404.component';
import {ChooserComponent} from './component/chooser/chooser.component';

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
  providers: []
})
export class StartModule {
}
