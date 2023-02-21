import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignupComponent} from './signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {HttpClientModule} from '@angular/common/http';
import {ApiService, AuthService, ConfigService, FooService, UserService} from '../service';
import {AppRoutingModule} from '../app-routing.module';
import {HomeComponent} from '../home';
import {LoginComponent} from '../login';
import {ChangePasswordComponent} from '../change-password';
import {MockApiService} from '../service/mocks';
import {AdminComponent} from '../admin';
import {NotFoundComponent} from '../not-found';
import {ForbiddenComponent} from '../forbidden';
import {GithubComponent} from '../component/github';
import {ApiCardComponent} from '../component/api-card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule],
      declarations: [
        SignupComponent,
        HomeComponent,
        LoginComponent,
        ChangePasswordComponent,
        AdminComponent,
        NotFoundComponent,
        ForbiddenComponent,
        ApiCardComponent,
        GithubComponent],
      providers: [
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        UserService,
        FooService,
        ConfigService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
