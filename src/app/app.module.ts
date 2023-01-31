import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesComponent } from './shoes/shoes.component';
import {MatCardModule} from '@angular/material/card';
import { MenshoeComponent } from './menshoe/menshoe.component';
import { LadiesshoeComponent } from './ladiesshoe/ladiesshoe.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    MenshoeComponent,
    LadiesshoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
