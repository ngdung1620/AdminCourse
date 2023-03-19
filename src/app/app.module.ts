import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UnauthorizedComponent } from './core/component/unauthorized/unauthorized.component';
import {InterceptorService} from "./core/interceptor.service";
import {JwtModule} from "@auth0/angular-jwt";
import {NgxPermissionsModule} from "ngx-permissions";
import { NotFoundComponent } from './core/component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem("token");
        },
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
