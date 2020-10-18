import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { ViewDeliveryComponent } from './view-delivery/view-delivery.component';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbProgressBarModule, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddDeliveryComponent, ViewDeliveryComponent],
  imports: [
    CommonModule,  
    DeliveryRoutingModule,
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
    NbTabsetModule,
    NbProgressBarModule,
    FormsModule
  ]
})
export class DeliveryModule { }
