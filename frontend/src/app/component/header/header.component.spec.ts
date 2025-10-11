import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['hasToken']);
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getMyInfo']);

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: UserService, useValue: userServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if user has signed in', () => {
    userService.currentUser = { id: 1, username: 'testuser' };
    expect(component.hasSignedIn()).toBe(true);
  });

  it('should check if user is not signed in', () => {
    userService.currentUser = null;
    expect(component.hasSignedIn()).toBe(false);
  });

  it('should get full name when signed in', () => {
    userService.currentUser = { id: 1, username: 'testuser', firstname: 'Test', lastname: 'User' };
    expect(component.userName()).toBe('Test User');
  });
});

