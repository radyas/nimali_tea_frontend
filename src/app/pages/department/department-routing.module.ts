import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'add',
      component: AddDepartmentComponent,
    },
    {
      path: 'view',
      component: ViewDepartmentComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {
}
