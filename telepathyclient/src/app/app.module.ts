import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { UtilityService } from './common/utility.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';



import { LeftService } from './left/left.service';
import { CenterService } from './center/center.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LeftComponent,
    CenterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AuthGuard,
    AuthService,
    UtilityService,
    LeftService,
    CenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
