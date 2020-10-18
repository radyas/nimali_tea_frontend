import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [AddSupplierComponent, ViewSupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbSelectModule,
  ],
})
export class SupplierModule { }
