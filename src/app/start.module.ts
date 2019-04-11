import { NgModule } from '@angular/core';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { ChooserComponent } from './component/chooser/chooser.component';
import { NotFound404Component } from './component/notfound404/notfound404.component';
import { AppModule } from './module/heroes/app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    StartRoutingModule,
    AppModule // App2Module nie ma żadnego routera, a jest typu "children", więc psuje jak jest tu umieszczony
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
