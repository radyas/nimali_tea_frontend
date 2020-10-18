import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: DashboardComponent,
    },
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module')
        .then(m => m.EmployeeModule),
    },
    {
      path: 'customer',
      loadChildren: () => import('./customer/customer.module')
        .then(m => m.CustomerModule),

    },
    {
      path: 'orders',
      loadChildren: () => import('./orders/orders.module')
        .then(m => m.OrdersModule),
    },
    {
      path: 'department',
      loadChildren: () => import('./department/department.module')
        .then(m => m.DepartmentModule),
    },
    {
      path: 'provider',
      loadChildren: () => import('./provider/provider.module')
        .then(m => m.ProviderModule),
    },
    {
      path: 'delivery',
      loadChildren: () => import('./delivery/delivery.module')
        .then(m => m.DeliveryModule),
    },
    {
      path: 'provider',
      loadChildren: () => import('./provider/provider.module')
        .then(m => m.ProviderModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    // need to change this to an error component
    // this will be called when a route cannot be matched
    { path: '**', redirectTo: 'home' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
