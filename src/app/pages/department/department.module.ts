import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';



@NgModule({
  declarations: [AddDepartmentComponent, ViewDepartmentComponent],
  imports: [
    CommonModule
  ]
})
export class DepartmentModule { }
