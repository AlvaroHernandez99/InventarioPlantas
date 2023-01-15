import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioFormComponent } from "./components/radio-form/radio-form.component";
import { AllButtonComponent } from './components/all-button/all-button.component';
import { ListElementComponent } from './components/list-element/list-element.component';
import { CommonModule } from "@angular/common";
import { OrderModule } from "ngx-order-pipe";





@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    RadioFormComponent,
    AllButtonComponent,
    ListElementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OrderModule

  ],
  providers: []
})
export class AppModule { }
