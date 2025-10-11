import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let configService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, ConfigService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    configService = TestBed.inject(ConfigService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET request', () => {
    const testData = { data: 'test' };
    const endpoint = '/test';

    service.get(endpoint).subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(endpoint);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should make POST request', () => {
    const testData = { data: 'test' };
    const endpoint = '/test';
    const payload = { name: 'test' };

    service.post(endpoint, payload).subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(endpoint);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(payload);
    req.flush(testData);
  });

  it('should make PUT request', () => {
    const testData = { data: 'test' };
    const endpoint = '/test';
    const payload = { name: 'updated' };

    service.put(endpoint, payload).subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(endpoint);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(payload);
    req.flush(testData);
  });

  it('should make DELETE request', () => {
    const endpoint = '/test/1';

    service.delete(endpoint).subscribe(data => {
      expect(data).toBeTruthy();
    });

    const req = httpMock.expectOne(endpoint);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});

