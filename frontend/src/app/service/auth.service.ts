import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {UserService} from './user.service';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
  ) {
  }

  login(user) {
    const loginHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = `username=${user.username}&password=${user.password}`;
    return this.apiService.post(this.config.loginUrl, body, loginHeaders)
      .pipe(map(() => {
        console.log('Login success');
        this.userService.getMyInfo().subscribe();
      }));
  }

  signup(user) {
    const signupHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.signupUrl, JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    return this.apiService.post(this.config.logoutUrl, {})
      .pipe(map(() => {
        this.userService.currentUser = null;
      }));
  }

  changePassowrd(passwordChanger) {
    return this.apiService.post(this.config.changePasswordUrl, passwordChanger);
  }

}
