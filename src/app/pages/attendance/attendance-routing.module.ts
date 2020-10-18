import {RouterModule, Routes} from '@angular/router';
import {AddAttendanceComponent} from './add-attendance/add-attendance.component';
import {ViewAttendanceComponent} from './view-attendance/view-attendance.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'add',
      component: AddAttendanceComponent,
    },
    {
      path: 'view',
      component: ViewAttendanceComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AttendanceRoutingModule {
}
