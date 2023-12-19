import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeModule } from './home/home.module';
import { adminModule } from './admin/admin.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnvioemailComponent } from './envioemail/envioemail.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvioemailComponent
  ],
  imports: [
    BrowserModule,
    
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
