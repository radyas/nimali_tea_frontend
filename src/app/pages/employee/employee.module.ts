import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import {EmployeeRoutingModule} from "./employee-routing.module";
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [AddEmployeeComponent, ViewEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
  ],
})
export class EmployeeModule { }
