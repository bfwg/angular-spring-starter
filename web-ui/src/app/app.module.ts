import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// material
import { MaterialModule, MdIconRegistry } from '@angular/material';
import 'style-loader!@angular/material/prebuilt-themes/pink-bluegrey.css';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

import {
  HeaderComponent,
  ApiCardComponent,
  FooterComponent,
  GithubComponent
} from './component';

import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from './service';

export function initUserFactory(userService: UserService) {
    return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    GithubComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [
    FooService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    MdIconRegistry,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
