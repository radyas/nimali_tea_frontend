import { Component, OnInit } from '@angular/core';
import {AttendanceData} from '../../../@core/data/attendance';

@Component({
  selector: 'ngx-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss'],
})
export class ViewAttendanceComponent implements OnInit {

  constructor(private attservice: AttendanceData) { }

  ngOnInit(): void {
    this.attservice.getAttendance()
      .subscribe(data => console.log(data));
  }

}
