import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableprojectComponent } from './tableproject/tableproject.component';
import { ButtonprojectComponent } from './buttonproject/buttonproject.component';

@NgModule({
  declarations: [
    AppComponent,
    TableprojectComponent,
    ButtonprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
