import {Injectable} from '@angular/core';
import {SalaryData} from '../data/salary';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SalaryService extends SalaryData {
  constructor(private http: HttpClient) {
    super();
  }
  getSalary(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/salary/';
    return this.http.get(apiUrl);
  }
}
