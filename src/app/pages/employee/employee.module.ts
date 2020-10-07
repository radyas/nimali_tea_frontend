import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import {EmployeeRoutingModule} from "./employee-routing.module";



@NgModule({
  declarations: [AddEmployeeComponent, ViewEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ],
})
export class EmployeeModule { }
