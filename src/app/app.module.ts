import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResultAreaComponent } from './components/result-area/result-area.component';
import { KeysAreaComponent } from './components/keys-area/keys-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultAreaComponent,
    KeysAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
