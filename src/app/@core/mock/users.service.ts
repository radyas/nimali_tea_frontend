import { of as observableOf,  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import {Injectable, OnInit} from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';
import { environment } from '../../../environments/environment';
import {NbAuthService} from '@nebular/auth';


@Injectable()
export class UserService extends UserData {
  headers(token) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'Token ' + token,
      }),
    };
  }
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(token): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/users/';
    return this.http.get(apiUrl, this.headers(token));
  }

  getCurrentUser(token): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/authUser/';
    return this.http.get(apiUrl, this.headers(token));

    // getContacts(): Observable<Contacts[]> {
    //   return observableOf(this.contacts);
    // }

    // getRecentUsers(): Observable<RecentUsers[]> {
    //   return observableOf(this.recentUsers);
    // }
  }
}
