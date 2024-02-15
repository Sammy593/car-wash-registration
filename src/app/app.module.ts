import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeModule } from './home/home.module';
import { adminModule } from './admin/admin.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {EnvioemailComponent} from "./admin/pages/envioemail/envioemail.component";
import {NgxCaptchaModule} from "ngx-captcha";

@NgModule({
  declarations: [
    AppComponent,
    EnvioemailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxCaptchaModule,

    homeModule,
    adminModule,

    AppRoutingModule,

    ReactiveFormsModule,
      FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
