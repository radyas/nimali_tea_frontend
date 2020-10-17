import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  declarations: [AddSupplierComponent, ViewSupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ThemeModule,
  
  ]
})
export class SupplierModule { }
