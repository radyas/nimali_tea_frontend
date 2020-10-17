import { Routes, RouterModule } from '@angular/router';
import { AddWarehouseComponent } from './add-warehouse/add-warehouse.component';
import { ViewWarehouseComponent } from './view-warehouse/view-warehouse.component';
import { NgModule } from '@angular/core';


const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'add',
        component: AddWarehouseComponent,
      },
      {
        path: 'view',
        component: ViewWarehouseComponent,
      },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class WarehouseRoutingModule {
  }
  