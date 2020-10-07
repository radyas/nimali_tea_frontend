import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';



@NgModule({
  declarations: [AddOrdersComponent, ViewOrdersComponent],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
