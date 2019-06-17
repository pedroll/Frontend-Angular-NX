import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    public http: HttpClient
  ) {
    this.url = environment['urlApiLravel'];
    this.getIdentity();
    this.getTokeny();
  }

  register(user): Observable<any> {

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
}
