import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'add',
      component: AddEmployeeComponent,
    },
    {
      path: 'view',
      component: ViewEmployeeComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {
}
