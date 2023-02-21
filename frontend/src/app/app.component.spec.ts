import {async, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MockApiService} from './service/mocks/api.service.mock';
import {ApiCardComponent, FooterComponent, GithubComponent, HeaderComponent} from './component';


import {ApiService, AuthService, ConfigService, FooService, UserService} from './service';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {NotFoundComponent} from './not-found';
import {AccountMenuComponent} from './component/header/account-menu/account-menu.component';
import {ChangePasswordComponent} from './change-password';
import {ForbiddenComponent} from './forbidden';
import {AdminComponent} from './admin';
import {SignupComponent} from './signup';
import {MatIconRegistry} from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      providers: [
        MatIconRegistry,
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        UserService,
        FooService,
        ConfigService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
