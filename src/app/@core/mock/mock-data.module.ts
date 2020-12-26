import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { OrdersModule } from '../../pages/orders/orders.module';
import { OrdersService } from './orders.service';
import {AdjustmentsService} from './adjustments.service';
import {SalaryService} from './salary.service';
import {AttendanceService} from './attendance.service';

const SERVICES = [
  UserService,
  OrdersService,
  AdjustmentsService,
  SalaryService,
  AttendanceService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
