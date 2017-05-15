import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  login(user) {
    const body = `username=${user.username}&password=${user.password}`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.apiService.post(this.config.login_url, body, headers);
  }

  logout() {
    return this.apiService.post(this.config.logout_url, {});
  }

}
