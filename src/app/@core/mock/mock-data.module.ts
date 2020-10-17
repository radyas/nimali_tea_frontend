import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { OrdersModule } from '../../pages/orders/orders.module';
import { OrdersService } from './orders.service';
import { ProviderService } from './provider.service';
import { DeliveryService } from './delivery.service';

const SERVICES = [
  UserService,
  OrdersService,
  ProviderService,
  DeliveryService
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
