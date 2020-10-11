import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule } from '@nebular/theme';


@NgModule({
  declarations: [AddDepartmentComponent, ViewDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
  ]
})
export class DepartmentModule { }
