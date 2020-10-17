import { of as observableOf,  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable()
export class UserService extends UserData {
  
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<any> {
    let apiUrl = 'http://localhost:4200/api/users/';
    return this.http.get(apiUrl);
  }

  // getContacts(): Observable<Contacts[]> {
  //   return observableOf(this.contacts);
  // }

  // getRecentUsers(): Observable<RecentUsers[]> {
  //   return observableOf(this.recentUsers);
  // }
}
