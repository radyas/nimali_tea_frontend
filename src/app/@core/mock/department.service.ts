import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentData } from '../data/department';
import { environment } from './../../../environments/environment'
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ environment.token})
};


@Injectable()
export class DepartmentService extends DepartmentData {

  constructor(private http: HttpClient) {
    super();
  }

  getDepartments(): Observable<any>{
      let apiUrl = 'http://localhost:4200/api/department/';
      return this.http.get(apiUrl, httpOptions);
  }
}
