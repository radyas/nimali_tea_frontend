import {Injectable} from '@angular/core';
import {Salary, SalaryData} from '../data/salary';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};

@Injectable()
export class SalaryService extends SalaryData {
  constructor(private http: HttpClient) {
    super();
  }
  getSalary(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/salary/';
    return this.http.get(apiUrl, httpOptions);
  }

  addSalary(salary: Salary): Observable<Salary> {
    const apiUrl = 'http://localhost:4200/api/salary/';
    return this.http.post<Salary>(apiUrl, salary, httpOptions);
  }
}
