import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbProgressBarModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddProviderComponent, ViewProviderComponent],
  imports: [
    CommonModule,  
    ProviderRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbStepperModule,
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProviderModule { }
