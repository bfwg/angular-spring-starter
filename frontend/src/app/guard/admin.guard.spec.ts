import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../service';
import { AdminGuard } from './admin.guard';
import { MockUserService } from '../service/mocks';

export class RouterStub {
  navigate(commands?: any[], extras?: any) {}
}

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        {
          provide: Router,
          useClass: RouterStub
        }
        {
          provide: UserService,
          useClass: MockUserService
        }
      ]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
