import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddOrdersComponent, ViewOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
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
    NbSelectModule,
    Ng2SmartTableModule,
    NbCardModule,
    FormsModule,
  ]
})
export class OrdersModule { }