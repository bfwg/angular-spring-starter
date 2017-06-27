import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiCardComponent, GithubComponent } from '../component';
import {
  MaterialModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from '../service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MaterialModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers:
      [
        UserService,
        ApiService,
        ConfigService,
        AuthService,

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
