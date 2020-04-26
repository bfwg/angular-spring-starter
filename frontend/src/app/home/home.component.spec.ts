import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {ApiCardComponent, GithubComponent} from '../component';
import {MockApiService} from '../service/mocks/api.service.mock';


import {ApiService, AuthService, ConfigService, FooService, UserService} from '../service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ApiCardComponent,
        GithubComponent
      ],
      imports: [
        MatButtonModule,
        MatCardModule
      ],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
