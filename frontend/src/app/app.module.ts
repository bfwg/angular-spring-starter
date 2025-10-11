import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AdminGuard, GuestGuard, LoginGuard} from './guard';
import {NotFoundComponent} from './not-found';
import {AccountMenuComponent} from './component/header/account-menu/account-menu.component';
import {ApiCardComponent, FooterComponent, GithubComponent, HeaderComponent} from './component';

import {ApiService, AuthService, ConfigService, FooService, UserService} from './service';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AdminComponent} from './admin/admin.component';
import {SignupComponent} from './signup/signup.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {MatIconRegistry} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    GithubComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    ForbiddenComponent,
    AdminComponent,
    SignupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
