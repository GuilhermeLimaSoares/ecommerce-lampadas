import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

import { MAIN_API } from './../app/app.api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: Http) { }

  public getUsers(): Observable<User[]> {
    return this.http.
      get(`${MAIN_API}/users`, {params: {}})
      .map(response => response.json());
  }


}
