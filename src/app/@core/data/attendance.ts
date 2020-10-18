import {Observable} from 'rxjs';

export class Attendance {
  id: number;
  date: string;
  type: string;
  outTime: string;
  inTime: string;
  employee: string;
}

export abstract class AttendanceData {
  abstract getAttendance(): Observable<Attendance[]>;
  abstract addAttendance(attendance: Attendance): Observable<Attendance>;
}
