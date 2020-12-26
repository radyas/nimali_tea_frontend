import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/users/';
    return this.http.get(apiUrl);
  }

  getCurrentUser(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/authUser/';
    return this.http.get(apiUrl);

    // getContacts(): Observable<Contacts[]> {
    //   return observableOf(this.contacts);
    // }

    // getRecentUsers(): Observable<RecentUsers[]> {
    //   return observableOf(this.recentUsers);
    // }
  }
}
