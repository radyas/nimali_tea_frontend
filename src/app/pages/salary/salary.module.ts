import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary.component';
import { AdjustmentsComponent } from './adjustments/adjustments.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { ViewSalaryComponent } from './view-salary/view-salary.component';
import { AddAdjustmentsComponent } from './adjustments/add-adjustments/add-adjustments.component';
import { ViewAdjustmentsComponent } from './adjustments/view-adjustments/view-adjustments.component';
import {SalaryRoutingModule} from './salary-routing.module';
import {NbCardModule} from "@nebular/theme";



@NgModule({
  declarations: [SalaryComponent, AdjustmentsComponent, AddSalaryComponent, ViewSalaryComponent, AddAdjustmentsComponent, ViewAdjustmentsComponent],
  imports: [
    CommonModule,
    SalaryRoutingModule,
    NbCardModule,
  ],
})
export class SalaryModule { }
