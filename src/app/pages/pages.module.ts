import { NgModule } from '@angular/core';
import { NbMenuModule, NbDatepickerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import {EmployeeModule} from './employee/employee.module';
import {AttendanceModule} from './attendance/attendance.module';
import {BranchModule} from './branch/branch.module';
import {CustomerModule} from './customer/customer.module';
import {DeliveryModule} from './delivery/delivery.module';
import {DepartmentModule} from './department/department.module';
import {DocumentsModule} from './documents/documents.module';
import {OrdersModule} from './orders/orders.module';
import {ProviderModule} from './provider/provider.module';
import {ReportsModule} from './reports/reports.module';
import {SalaryModule} from './salary/salary.module';
import {VoucherModule} from './voucher/voucher.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    EmployeeModule,
    AttendanceModule,
    BranchModule,
    CustomerModule,
    DeliveryModule,
    DepartmentModule,
    DocumentsModule,
    OrdersModule,
    ProviderModule,
    ReportsModule,
    DeliveryModule,
    SalaryModule,
    VoucherModule,
    NbDatepickerModule.forRoot(),
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
export class AppModule { }
