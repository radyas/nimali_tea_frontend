import {Injectable} from '@angular/core';
import {AttendanceData} from '../data/attendance';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AttendanceService extends AttendanceData {
  constructor(private http: HttpClient) {
    super();
  }
  getAttendance(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/attendance/';
    return this.http.get(apiUrl);
  }
}
