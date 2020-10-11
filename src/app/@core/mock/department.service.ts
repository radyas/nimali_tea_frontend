import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentData } from '../data/department';


@Injectable()
export class DepartmentService extends DepartmentData {
   
  constructor(private http: HttpClient) {
    super();
  }

  getDepartments(): Observable<any>{
      let apiUrl = 'http://localhost:4200/api/department/'
      return this.http.get(apiUrl)
  }
}
