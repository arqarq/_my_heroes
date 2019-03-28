import {NgModule} from '@angular/core';
import {AppRoot2Component} from './app-root2.component';
import {BrowserModule, Title} from '@angular/platform-browser';

@NgModule({
  declarations: [AppRoot2Component],
  imports: [BrowserModule],
  bootstrap: [AppRoot2Component],
  providers: [Title]
})
export class App2Module {
}
