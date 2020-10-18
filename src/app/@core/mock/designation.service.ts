import {Injectable} from '@angular/core';
import {DesignationData} from '../data/designation';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};

@Injectable()
export class DesignationService extends DesignationData {
  constructor(private http: HttpClient) {
    super();
  }
  getDesignation(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/designation/';
    return this.http.get(apiUrl, httpOptions);
  }
}
