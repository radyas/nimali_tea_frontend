import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { ViewVoucherComponent } from './view-voucher/view-voucher.component';






@NgModule({
  declarations: [AddVoucherComponent, ViewVoucherComponent],
  imports: [
    CommonModule,
   
  ]
})
export class VoucherModule { }
