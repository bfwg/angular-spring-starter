import {Injectable} from '@angular/core';
import {Observable, catchError, firstValueFrom, map, of, tap} from 'rxjs';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';

/**
 * User interface representing the current authenticated user.
 */
export interface User {
  id?: number;
  username: string;
  firstname?: string;
  lastname?: string;
  authorities?: { authority: string }[];
}

/**
 * Service for managing user data and user-related operations.
 * 
 * This service follows Clean Code principles:
 * - Single Responsibility: Manages user data and user operations
 * - Proper typing for type safety
 * - Observable-based API for reactive programming
 * - Comprehensive error handling
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _currentUser: User | null = null;

  constructor(
    private readonly apiService: ApiService,
    private readonly config: ConfigService
  ) {
  }

  /**
   * Gets the current authenticated user.
   */
  get currentUser(): User | null {
    return this._currentUser;
  }

  /**
   * Sets the current authenticated user.
   */
  set currentUser(user: User | null) {
    this._currentUser = user;
  }

  /**
   * Initializes the user by attempting to refresh the token and fetch user info.
   * 
   * @returns Promise that resolves with the user or null if initialization fails
   */
  async initUser(): Promise<User | null> {
    try {
      const tokenResponse = await firstValueFrom(
        this.apiService.get(this.config.refreshTokenUrl).pipe(
          catchError(() => of(null))
        )
      );

      if (tokenResponse?.access_token) {
        const user = await firstValueFrom(this.getMyInfo());
        return user;
      }

      return null;
    } catch (error) {
      console.error('Failed to initialize user:', error);
      return null;
    }
  }

  /**
   * Resets all user credentials to default (demo/testing purpose).
   * 
   * @returns Observable that completes when credentials are reset
   */
  resetCredentials(): Observable<any> {
    return this.apiService.get(this.config.resetCredentialsUrl).pipe(
      catchError(error => {
        console.error('Failed to reset credentials:', error);
        throw error;
      })
    );
  }

  /**
   * Fetches the current user's information from the server.
   * 
   * @returns Observable of the current user
   */
  getMyInfo(): Observable<User> {
    return this.apiService.get(this.config.whoamiUrl).pipe(
      tap(user => this._currentUser = user),
      catchError(error => {
        console.error('Failed to fetch user info:', error);
        this._currentUser = null;
        throw error;
      })
    );
  }

  /**
   * Fetches all users (admin only).
   * 
   * @returns Observable of all users
   */
  getAll(): Observable<User[]> {
    return this.apiService.get(this.config.usersUrl).pipe(
      catchError(error => {
        console.error('Failed to fetch all users:', error);
        throw error;
      })
    );
  }

  /**
   * Checks if a user is currently authenticated.
   * 
   * @returns true if user is authenticated, false otherwise
   */
  isAuthenticated(): boolean {
    return this._currentUser !== null;
  }

  /**
   * Checks if the current user has a specific role.
   * 
   * @param role - The role to check for
   * @returns true if user has the role, false otherwise
   */
  hasRole(role: string): boolean {
    return this._currentUser?.authorities?.some(auth => auth.authority === role) ?? false;
  }

  /**
   * Gets the current user's display name.
   * 
   * @returns The user's full name or username
   */
  getDisplayName(): string {
    if (!this._currentUser) {
      return 'Guest';
    }

    if (this._currentUser.firstname || this._currentUser.lastname) {
      return `${this._currentUser.firstname || ''} ${this._currentUser.lastname || ''}`.trim();
    }

    return this._currentUser.username;
  }
}
