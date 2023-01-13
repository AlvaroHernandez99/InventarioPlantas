import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioFormComponent } from "./components/radio-form/radio-form.component";
import { AllButtonComponent } from './components/all-button/all-button.component';
import { ListElementComponent } from './components/list-element/list-element.component';


@NgModule({
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
