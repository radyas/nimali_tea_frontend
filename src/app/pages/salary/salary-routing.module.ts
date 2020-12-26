import {RouterModule, Routes} from '@angular/router';
import {AdjustmentsComponent} from './adjustments/adjustments.component';
import {NgModule} from '@angular/core';
import {AddSalaryComponent} from './add-salary/add-salary.component';
import {ViewSalaryComponent} from './view-salary/view-salary.component';
import {AddAdjustmentsComponent} from './adjustments/add-adjustments/add-adjustments.component';
import {ViewAdjustmentsComponent} from './adjustments/view-adjustments/view-adjustments.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'adjustments',
      component: AdjustmentsComponent,
    },
    {
      path: 'addsal',
      component: AddSalaryComponent,
    },
    {
      path: 'viewsal',
      component: ViewSalaryComponent,
    },
    {
      path: 'addadj',
      component: AddAdjustmentsComponent,
    },
    {
      path: 'viewadj',
      component: ViewAdjustmentsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SalaryRoutingModule {
}
