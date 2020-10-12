import { Component, OnInit } from '@angular/core';
import {AttendanceData} from '../../../@core/data/attendance';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss'],
})
export class ViewAttendanceComponent implements OnInit {
  data: LocalDataSource;
  constructor(private attservice: AttendanceData) { }

  ngOnInit(): void {
    this.data = new LocalDataSource();
    this.attservice.getAttendance()
      .subscribe(document => {
        this.data.load(document);
      });
  }
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      date: {
        title: 'Date',
      },
      type: {
        title: 'Type',
      },
      inTime: {
        title: 'In Time',
      },
      outTime: {
        title: 'Out Time',
      },
      employee: {
        title: 'Employee',
      },
      },
      actions: {
        add: false,
        edit: false,
        delete: false,
      },
  };

}
