import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';



@NgModule({
  declarations: [AddInventoryComponent, ViewInventoryComponent],
  imports: [
    CommonModule
  ]
})
export class InventoryModule { }
