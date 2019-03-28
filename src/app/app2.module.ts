import {NgModule} from '@angular/core';
import {AppRoot2Component} from './app-root2.component';
import {BrowserModule, Title} from '@angular/platform-browser';
import {AppRouting2Module} from './app-routing2.module';

@NgModule({
  declarations: [
    AppRoot2Component
  ],
  imports: [
    BrowserModule,
    AppRouting2Module
  ],
  bootstrap: [
    AppRoot2Component
  ],
  providers: [Title]
})
export class App2Module {
}
