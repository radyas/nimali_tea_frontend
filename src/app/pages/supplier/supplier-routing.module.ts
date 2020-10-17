import { Routes, RouterModule } from '@angular/router';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { NgModule } from '@angular/core';


const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'add',
        component: AddSupplierComponent,
      },
      {
        path: 'view',
        component: ViewSupplierComponent,
      },
    ],
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SupplierRoutingModule {
  }