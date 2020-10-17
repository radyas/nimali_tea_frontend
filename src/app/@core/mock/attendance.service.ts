import {Injectable} from '@angular/core';
import {Attendance, AttendanceData} from '../data/attendance';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};

@Injectable()
export class AttendanceService extends AttendanceData {
  constructor(private http: HttpClient) {
    super();
  }
  getAttendance(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/attendance/';
    return this.http.get(apiUrl, httpOptions);
  }

  addAttendance(attendance: Attendance): Observable<Attendance> {
    const apiUrl = 'http://localhost:4200/api/attendance/';
    return this.http.post<Attendance>(apiUrl, attendance, httpOptions);
  }
}
