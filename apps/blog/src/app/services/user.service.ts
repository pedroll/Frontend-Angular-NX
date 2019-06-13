import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = environment['urlApiLravel'];
  }

  register(user): Observable<any> {

    const url = `${this.url}register`;
    const json = JSON.stringify(user);

    const params = new HttpParams().set('json', json);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, params, {headers});
  }

}
