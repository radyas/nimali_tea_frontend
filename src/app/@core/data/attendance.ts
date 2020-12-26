import {Observable} from 'rxjs';

export class Attendance {
  id: number;
  outTime: string;
  inTime: string;
}

export abstract class AttendanceData {
  abstract getAttendance(): Observable<Attendance[]>;
}
