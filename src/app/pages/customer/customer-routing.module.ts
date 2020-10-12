import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';




const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'add',
        component: AddCustomerComponent,
      },
      {
        path: 'view',
        component: ViewCustomerComponent,
      },
    ],
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CustomerRoutingModule {
  }
  