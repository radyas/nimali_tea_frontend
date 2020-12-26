import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NgModule } from '@angular/core';


const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'add',
        component: AddProductComponent,
      },
      {
        path: 'view',
        component: ViewProductComponent,
      },
    ],
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductsRoutingModule {
  }
