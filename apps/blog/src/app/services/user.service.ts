import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;
  public identity: User;
  public token: string;
  constructor(
    public http: HttpClient,
    private router: Router
  ) {
    this.url = environment['urlApiLravel'];
    this.checkLocalStorage();

  }

  register(user: any): Observable<any> {

    const url = `${this.url}register`;
    const json = JSON.stringify(user);

    const params = new HttpParams().set('json', json);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, params, {headers});
  }

  login(user: any, getToken?): Observable<any> {
    if (getToken) {
      user.gettoken = 'true';
    }
    const url = `${this.url}login`;
    const json = JSON.stringify(user);

    const params = new HttpParams().set('json', json);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, params, {headers});

  }

  getIdentity(): User {
    const identity = JSON.parse(localStorage.getItem('identity'));

    this.identity = (identity && typeof identity !== 'undefined') ? identity : undefined;

    return this.identity;
  }

  getTokeny(): string {

    const token = localStorage.getItem('identity');
    this.token = (token && typeof token !== 'undefined') ? token : undefined;

    return this.token;
  }

  logout(): void {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    this.identity = undefined;
    this.token = undefined;
    this.router.navigate(['inicio']);

  }

  checkLocalStorage(): void {
    const identity = JSON.parse(localStorage.getItem('identity'));
    this.identity = (identity && typeof identity !== 'undefined') ? identity : undefined;

    const token = localStorage.getItem('identity');
    this.token = (token && typeof token !== 'undefined') ? token : undefined;
  }

  setIdentity(token: any, user: User): void {
    this.token = token;
    this.identity = user;

    // persistir datos en local storage
    localStorage.setItem('token', token);
    localStorage.setItem('identity', JSON.stringify(user));

  }
}
