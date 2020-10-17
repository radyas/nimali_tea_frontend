import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { ViewDeliveryComponent } from './view-delivery/view-delivery.component';

const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'add',
        component: AddDeliveryComponent,
      },
      {
        path: 'view',
        component: ViewDeliveryComponent,
      },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DeliveryRoutingModule {
  }
  