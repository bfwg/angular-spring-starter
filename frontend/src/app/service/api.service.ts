import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';
import {serialize} from '../shared/utilities/serialize';

/**
 * Enum for HTTP request methods.
 * Provides type safety for HTTP method selection.
 */
export enum RequestMethod {
  Get = 'GET',
  Head = 'HEAD',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Patch = 'PATCH'
}

/**
 * Core API service for making HTTP requests.
 * 
 * This service follows Clean Code principles:
 * - Single Responsibility: Handles HTTP communication
 * - DRY: Centralizes HTTP configuration and error handling
 * - Proper error handling with meaningful error messages
 * - Type safety with TypeScript
 * - Consistent API across all HTTP methods
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly defaultHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(private readonly http: HttpClient) {
  }

  /**
   * Performs a GET request.
   * 
   * @param path - The API endpoint path
   * @param args - Optional query parameters
   * @returns Observable of the response data
   */
  get(path: string, args?: any): Observable<any> {
    const options = {
      headers: this.defaultHeaders,
      withCredentials: true,
      params: args ? serialize(args) : undefined
    };

    return this.http.get(path, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Performs a POST request.
   * 
   * @param path - The API endpoint path
   * @param body - The request body
   * @param customHeaders - Optional custom headers
   * @returns Observable of the response data
   */
  post(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
    return this.request(path, body, RequestMethod.Post, customHeaders);
  }

  /**
   * Performs a PUT request.
   * 
   * @param path - The API endpoint path
   * @param body - The request body
   * @returns Observable of the response data
   */
  put(path: string, body: any): Observable<any> {
    return this.request(path, body, RequestMethod.Put);
  }

  /**
   * Performs a DELETE request.
   * 
   * @param path - The API endpoint path
   * @param body - Optional request body
   * @returns Observable of the response data
   */
  delete(path: string, body?: any): Observable<any> {
    return this.request(path, body, RequestMethod.Delete);
  }

  /**
   * Performs a generic HTTP request.
   * 
   * @param path - The API endpoint path
   * @param body - The request body
   * @param method - The HTTP method
   * @param customHeaders - Optional custom headers
   * @returns Observable of the response data
   */
  private request(
    path: string,
    body: any,
    method: RequestMethod = RequestMethod.Post,
    customHeaders?: HttpHeaders
  ): Observable<any> {
    const req = new HttpRequest(method, path, body, {
      headers: customHeaders || this.defaultHeaders,
      withCredentials: true
    });

    return this.http.request(req).pipe(
      filter(response => response instanceof HttpResponse),
      map((response: HttpResponse<any>) => response.body),
      catchError(this.handleError)
    );
  }

  /**
   * Handles HTTP errors in a consistent way.
   * 
   * @param error - The HTTP error response
   * @returns Observable that errors with a user-friendly message
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Network error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message || 'Bad request. Please check your input.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please log in.';
          break;
        case 403:
          errorMessage = 'Forbidden. You do not have permission to access this resource.';
          break;
        case 404:
          errorMessage = 'Resource not found.';
          break;
        case 409:
          errorMessage = error.error?.message || 'Conflict. The resource already exists.';
          break;
        case 500:
          errorMessage = 'Internal server error. Please try again later.';
          break;
        default:
          errorMessage = error.error?.message || `Server error: ${error.status}`;
      }
    }

    console.error('API Error:', errorMessage, error);
    return throwError(() => ({
      message: errorMessage,
      status: error.status,
      originalError: error
    }));
  }
}
