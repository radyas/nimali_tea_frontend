import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { ViewDeliveryComponent } from './view-delivery/view-delivery.component';



@NgModule({
  declarations: [AddDeliveryComponent, ViewDeliveryComponent],
  imports: [
    CommonModule
  ]
})
export class DeliveryModule { }
