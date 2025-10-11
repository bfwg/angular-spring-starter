import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService]
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct login URL', () => {
    expect(service.loginUrl).toBe('/api/login');
  });

  it('should return correct logout URL', () => {
    expect(service.logoutUrl).toBe('/api/logout');
  });

  it('should return correct signup URL', () => {
    expect(service.signupUrl).toBe('/api/signup');
  });

  it('should return correct whoami URL', () => {
    expect(service.whoamiUrl).toBe('/api/whoami');
  });

  it('should return correct users URL', () => {
    expect(service.usersUrl).toBe('/api/user/all');
  });

  it('should return correct refresh token URL', () => {
    expect(service.refreshTokenUrl).toBe('/api/refresh');
  });

  it('should return correct change password URL', () => {
    expect(service.changePasswordUrl).toBe('/api/changePassword');
  });

  it('should return correct reset credentials URL', () => {
    expect(service.resetCredentialsUrl).toBe('/api/user/reset-credentials');
  });

  it('should return correct foo URL', () => {
    expect(service.fooUrl).toBe('/api/foo');
  });
});

