import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';



@NgModule({
  declarations: [AddAttendanceComponent, ViewAttendanceComponent],
  imports: [
    CommonModule
  ]
})
export class AttendanceModule { }
