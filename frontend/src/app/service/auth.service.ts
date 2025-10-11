import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ApiService} from './api.service';
import {UserService} from './user.service';
import {ConfigService} from './config.service';

/**
 * Authentication service following Clean Code principles.
 * 
 * This service handles user authentication operations including:
 * - Login and logout
 * - User registration
 * - Password changes
 * 
 * Follows SOLID principles:
 * - Single Responsibility: Focuses only on authentication
 * - Dependency Inversion: Depends on service abstractions
 * - Interface Segregation: Clear, focused public API
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JSON_HEADERS = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  private readonly FORM_HEADERS = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(
    private readonly apiService: ApiService,
    private readonly userService: UserService,
    private readonly config: ConfigService,
  ) {
  }

  /**
   * Authenticates a user with username and password.
   * 
   * @param user - The user credentials object containing username and password
   * @returns Observable that completes on successful login
   */
  login(user: { username: string; password: string }): Observable<void> {
    if (!user?.username || !user?.password) {
      return throwError(() => new Error('Username and password are required'));
    }

    const body = `username=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}`;
    
    return this.apiService.post(this.config.loginUrl, body, this.FORM_HEADERS)
      .pipe(
        tap(() => this.userService.getMyInfo().subscribe()),
        map(() => void 0),
        catchError(error => {
          const errorMessage = error?.error?.message || 'Login failed. Please check your credentials.';
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  /**
   * Registers a new user.
   * 
   * @param user - The user registration data
   * @returns Observable that completes on successful registration
   */
  signup(user: any): Observable<void> {
    if (!user?.username || !user?.password) {
      return throwError(() => new Error('Username and password are required'));
    }

    return this.apiService.post(this.config.signupUrl, JSON.stringify(user), this.JSON_HEADERS)
      .pipe(
        map(() => void 0),
        catchError(error => {
          const errorMessage = error?.error?.message || 'Signup failed. Please try again.';
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  /**
   * Logs out the current user.
   * 
   * @returns Observable that completes on successful logout
   */
  logout(): Observable<void> {
    return this.apiService.post(this.config.logoutUrl, {})
      .pipe(
        tap(() => this.clearUserSession()),
        map(() => void 0),
        catchError(error => {
          // Even if logout fails on server, clear local session
          this.clearUserSession();
          return throwError(() => new Error('Logout completed with warnings'));
        })
      );
  }

  /**
   * Changes the current user's password.
   * 
   * @param passwordChanger - Object containing oldPassword and newPassword
   * @returns Observable that completes on successful password change
   */
  changePassword(passwordChanger: { oldPassword: string; newPassword: string }): Observable<any> {
    if (!passwordChanger?.oldPassword || !passwordChanger?.newPassword) {
      return throwError(() => new Error('Old and new passwords are required'));
    }

    if (passwordChanger.oldPassword === passwordChanger.newPassword) {
      return throwError(() => new Error('New password must be different from old password'));
    }

    return this.apiService.post(this.config.changePasswordUrl, passwordChanger)
      .pipe(
        catchError(error => {
          const errorMessage = error?.error?.message || 'Failed to change password. Please try again.';
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  /**
   * Clears the user session data.
   * Private helper method following the Single Responsibility Principle.
   */
  private clearUserSession(): void {
    this.userService.currentUser = null;
  }
}
