import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import {AttendanceRoutingModule} from './attendance-routing.module';
import {NbCardModule} from "@nebular/theme";



@NgModule({
  declarations: [AddAttendanceComponent, ViewAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    NbCardModule,
  ],
})
export class AttendanceModule { }
