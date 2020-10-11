import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { DepartmentRoutingModule } from './department-routing.module';


@NgModule({
  declarations: [AddDepartmentComponent, ViewDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
  ]
})
export class DepartmentModule { }
