import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  accessToken: Token = {} as Token;

  private readonly http = inject(HttpClient);

  /**
   *
   * To register user
   * @param user
   * @returns user
   */
  public register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiHost}users/`, user);
  }

  /**
   *
   * To loggin user
   * @param user
   * @returns token
   */
  public login(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.apiHost}token/`, {
      username: user.username,
      password: user.password,
    });
  }

  /**
   *
   * To loggin user
   * @param user
   * @returns token
   */
  public refreshToken(refresh: string): Observable<Token> {
    return this.http.post<Token>(`${environment.apiHost}token/refresh/`, {
      refresh: refresh,
    });
  }

  setToken(credentials: Token) {
    this.accessToken = credentials;
  }

  getToken() {
    return this.accessToken;
  }
}
