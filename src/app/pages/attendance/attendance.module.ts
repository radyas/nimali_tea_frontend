import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import {AttendanceRoutingModule} from './attendance-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';



@NgModule({
  declarations: [AddAttendanceComponent, ViewAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    NbCardModule,
    NbSelectModule,
    NbDatepickerModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
    FormsModule,
    NbIconModule,
    Ng2SmartTableModule,
    FormsModule,
  ],
})
export class AttendanceModule { }
