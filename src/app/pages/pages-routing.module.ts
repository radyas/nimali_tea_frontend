import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from '../auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate:  [AuthGuard],
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
      path: 'documents',
      loadChildren: () => import('./documents/documents.module')
        .then(m => m.DocumentsModule),
    },
    {
      path: 'attendance',
      loadChildren: () => import('./attendance/attendance.module')
        .then(m => m.AttendanceModule),
    },
    {
      path: 'salary',
      loadChildren: () => import('./salary/salary.module')
        .then(m => m.SalaryModule),
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
