import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['get', 'post']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        { provide: ApiService, useValue: apiServiceSpy },
        ConfigService
      ]
    });
    service = TestBed.inject(UserService);
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', (done) => {
    const testUsers = [{ id: 1, username: 'test' }];
    apiService.get.and.returnValue(of(testUsers));

    service.getAll().subscribe(users => {
      expect(users).toEqual(testUsers);
      expect(apiService.get).toHaveBeenCalled();
      done();
    });
  });

  it('should get my info', (done) => {
    const testUser = { id: 1, username: 'test' };
    apiService.get.and.returnValue(of(testUser));

    service.getMyInfo().subscribe(user => {
      expect(user).toEqual(testUser);
      expect(service.currentUser).toEqual(testUser);
      expect(apiService.get).toHaveBeenCalled();
      done();
    });
  });

  it('should reset credentials', (done) => {
    const response = { result: 'success' };
    apiService.get.and.returnValue(of(response));

    service.resetCredentials().subscribe(result => {
      expect(result).toEqual(response);
      expect(apiService.get).toHaveBeenCalled();
      done();
    });
  });
});

