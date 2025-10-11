import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let configServiceSpy: jasmine.SpyObj<ConfigService>;

  beforeEach(() => {
    const apiSpy = jasmine.createSpyObj('ApiService', ['post']);
    const userSpy = jasmine.createSpyObj('UserService', ['getMyInfo']);
    const configSpy = jasmine.createSpyObj('ConfigService', [], {
      loginUrl: '/api/login',
      logoutUrl: '/api/logout',
      signupUrl: '/api/signup',
      changePasswordUrl: '/api/changePassword'
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: ApiService, useValue: apiSpy },
        { provide: UserService, useValue: userSpy },
        { provide: ConfigService, useValue: configSpy }
      ]
    });

    service = TestBed.inject(AuthService);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    configServiceSpy = TestBed.inject(ConfigService) as jasmine.SpyObj<ConfigService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should successfully login with valid credentials', (done) => {
      const credentials = { username: 'testuser', password: 'password123' };
      apiServiceSpy.post.and.returnValue(of({ success: true }));
      userServiceSpy.getMyInfo.and.returnValue(of({ id: 1, username: 'testuser' }));

      service.login(credentials).subscribe({
        next: () => {
          expect(apiServiceSpy.post).toHaveBeenCalled();
          expect(userServiceSpy.getMyInfo).toHaveBeenCalled();
          done();
        }
      });
    });

    it('should throw error with null credentials', (done) => {
      service.login(null as any).subscribe({
        error: (error) => {
          expect(error.message).toContain('required');
          done();
        }
      });
    });

    it('should throw error with missing username', (done) => {
      service.login({ username: '', password: 'test' }).subscribe({
        error: (error) => {
          expect(error.message).toContain('required');
          done();
        }
      });
    });

    it('should encode URL parameters', (done) => {
      const credentials = { username: 'test@user.com', password: 'pass word' };
      apiServiceSpy.post.and.returnValue(of({}));
      userServiceSpy.getMyInfo.and.returnValue(of({ id: 1, username: 'test@user.com' }));

      service.login(credentials).subscribe({
        next: () => {
          const callArgs = apiServiceSpy.post.calls.mostRecent().args;
          expect(callArgs[1]).toContain('test%40user.com');
          done();
        }
      });
    });

    it('should handle login failure', (done) => {
      const credentials = { username: 'testuser', password: 'wrong' };
      apiServiceSpy.post.and.returnValue(throwError(() => ({ error: { message: 'Invalid credentials' } })));

      service.login(credentials).subscribe({
        error: (error) => {
          expect(error.message).toContain('Invalid credentials');
          done();
        }
      });
    });
  });

  describe('signup', () => {
    it('should successfully register new user', (done) => {
      const userData = { username: 'newuser', password: 'password123', firstname: 'Test', lastname: 'User' };
      apiServiceSpy.post.and.returnValue(of({ success: true }));

      service.signup(userData).subscribe({
        next: () => {
          expect(apiServiceSpy.post).toHaveBeenCalledWith(
            configServiceSpy.signupUrl,
            jasmine.any(String),
            jasmine.any(Object)
          );
          done();
        }
      });
    });

    it('should throw error with null user data', (done) => {
      service.signup(null).subscribe({
        error: (error) => {
          expect(error.message).toContain('required');
          done();
        }
      });
    });

    it('should handle signup failure', (done) => {
      const userData = { username: 'existing', password: '123' };
      apiServiceSpy.post.and.returnValue(throwError(() => ({ error: { message: 'Username exists' } })));

      service.signup(userData).subscribe({
        error: (error) => {
          expect(error.message).toContain('Username exists');
          done();
        }
      });
    });
  });

  describe('logout', () => {
    it('should successfully logout', (done) => {
      apiServiceSpy.post.and.returnValue(of({}));
      userServiceSpy.currentUser = { id: 1, username: 'test' } as any;

      service.logout().subscribe({
        next: () => {
          expect(apiServiceSpy.post).toHaveBeenCalledWith(configServiceSpy.logoutUrl, {});
          expect(userServiceSpy.currentUser).toBeNull();
          done();
        }
      });
    });

    it('should clear session even if server logout fails', (done) => {
      apiServiceSpy.post.and.returnValue(throwError(() => new Error('Server error')));
      userServiceSpy.currentUser = { id: 1, username: 'test' } as any;

      service.logout().subscribe({
        error: () => {
          expect(userServiceSpy.currentUser).toBeNull();
          done();
        }
      });
    });
  });

  describe('changePassword', () => {
    it('should successfully change password', (done) => {
      const request = { oldPassword: 'old123', newPassword: 'new456' };
      apiServiceSpy.post.and.returnValue(of({ success: true }));

      service.changePassword(request).subscribe({
        next: () => {
          expect(apiServiceSpy.post).toHaveBeenCalledWith(
            configServiceSpy.changePasswordUrl,
            request
          );
          done();
        }
      });
    });

    it('should throw error with null request', (done) => {
      service.changePassword(null as any).subscribe({
        error: (error) => {
          expect(error.message).toContain('required');
          done();
        }
      });
    });

    it('should throw error when passwords are same', (done) => {
      const request = { oldPassword: 'same123', newPassword: 'same123' };

      service.changePassword(request).subscribe({
        error: (error) => {
          expect(error.message).toContain('different');
          done();
        }
      });
    });

    it('should handle password change failure', (done) => {
      const request = { oldPassword: 'old', newPassword: 'new' };
      apiServiceSpy.post.and.returnValue(throwError(() => ({ error: { message: 'Incorrect password' } })));

      service.changePassword(request).subscribe({
        error: (error) => {
          expect(error.message).toContain('Incorrect password');
          done();
        }
      });
    });
  });
});

