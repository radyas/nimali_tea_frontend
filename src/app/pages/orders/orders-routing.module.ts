import { Routes, RouterModule } from '@angular/router';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { NgModule } from '@angular/core';


const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'add',
        component: AddOrdersComponent,
      },
      {
        path: 'view',
        component: ViewOrdersComponent,
      },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class OrdersRoutingModule {
  }
  