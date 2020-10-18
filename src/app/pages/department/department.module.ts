import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddDepartmentComponent, ViewDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
  ]
})
export class DepartmentModule { }
