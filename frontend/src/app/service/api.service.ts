import { Http, Headers, Response, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  headers = new Headers({
    'Accept': 'application/json'
  });

  constructor(
    private http: Http
  ) {
  }

  anonGet(path: string): Observable<any> {
    return this.http.get(
      path,
      {
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData);
  }

  get(path: string): Observable<any> {
    return this.http.get(
      path,
      {
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkAuth.bind(this));
  }

  post(path: string, body, customHeaders?, put?): Observable<any> {
    return this.http.request(
      path,
      {
        method: put ? RequestMethod.Put : RequestMethod.Post,
        body: body,
        headers: customHeaders || this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkAuth.bind(this));
  }

  put(path: string, body: any): Observable<any> {
    return this.post(path, body, true);
  }


  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  // Display error if logged in, otherwise redirect to IDP
  private checkAuth(error: any) {
    if (error && error.status === 401) {
      // this.redirectIfUnauth(error);
    } else {
      // this.displayError(error);
    }
    throw error;
  }

}
