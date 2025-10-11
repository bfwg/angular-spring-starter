import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { GuestGuard } from './guest.guard';
import { UserService } from '../service/user.service';

describe('GuestGuard', () => {
  let guard: GuestGuard;
  let userService: UserService;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GuestGuard,
        UserService,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(GuestGuard);
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access when user is not authenticated', () => {
    userService.currentUser = null;
    expect(guard.canActivate()).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to home when user is authenticated', () => {
    userService.currentUser = { id: 1, username: 'test' };
    expect(guard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});

