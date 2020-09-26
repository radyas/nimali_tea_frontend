import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';



@NgModule({
  declarations: [AddEmployeeComponent, ViewEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
