import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import {EmployeeRoutingModule} from "./employee-routing.module";
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddEmployeeComponent, ViewEmployeeComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        NbCardModule,
        Ng2SmartTableModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule,
        FormsModule,
        NbSelectModule,
    ],
})
export class EmployeeModule { }
