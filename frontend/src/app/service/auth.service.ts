import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
  ) { }

  login(user) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = `username=${user.username}&password=${user.password}`;
    return this.apiService.post(this.config.login_url, body, loginHeaders).map(() => {
      this.userService.getMyInfo().subscribe();
    });
  }

  logout() {
    return this.apiService.post(this.config.logout_url, {})
      .map(() => {
        this.userService.currentUser = null;
      });
  }

  changePassowrd(passwordChanger) {
    return this.apiService.post(this.config.change_password_url, passwordChanger);
  }

}
