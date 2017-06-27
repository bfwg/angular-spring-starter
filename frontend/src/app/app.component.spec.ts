import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { LoginGuard } from './guard';
import { NotFoundComponent } from './not-found';
import {
  HeaderComponent,
  ApiCardComponent,
  FooterComponent,
  GithubComponent,
} from './component';

import {
  MaterialModule
} from '@angular/material';


import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from './service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
        MaterialModule.forRoot(),
        //FormsModule,
        //ReactiveFormsModule,
        //HttpModule,

      ],
      providers: [
        ApiService,
        AuthService,
        UserService,
        FooService,
        ConfigService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  it('should render title in a span tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Angular-Spring-JWT-Starter');
  }));
});
