import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooService } from './foo.service';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { of } from 'rxjs';

describe('FooService', () => {
  let service: FooService;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FooService,
        { provide: ApiService, useValue: apiServiceSpy },
        ConfigService
      ]
    });
    service = TestBed.inject(FooService);
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get foo data', (done) => {
    const testData = { foo: 'bar' };
    apiService.get.and.returnValue(of(testData));

    service.getFoo().subscribe(data => {
      expect(data).toEqual(testData);
      expect(apiService.get).toHaveBeenCalled();
      done();
    });
  });
});

