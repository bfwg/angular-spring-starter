import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MockApiService } from './service/mocks/api.service.mock';

import { LoginGuard } from './guard';
import { NotFoundComponent } from './not-found';
import {
  HeaderComponent,
  ApiCardComponent,
  FooterComponent,
  GithubComponent,
} from './component';

import {
  MdToolbarModule,
  MdIconRegistry
} from '@angular/material';


import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from './service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
      ],
      imports: [
        RouterTestingModule,
        MdToolbarModule
      ],
      providers: [
        MdIconRegistry,
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        UserService,
        FooService,
        ConfigService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Angular-Spring-Starter');
  }));
});
