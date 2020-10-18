import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddCustomerComponent, ViewCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbCardModule,
    Ng2SmartTableModule,
    FormsModule,
  ],
})
export class CustomerModule { }
export class PageModule { }