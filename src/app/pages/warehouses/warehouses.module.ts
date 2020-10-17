import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWarehouseComponent } from './add-warehouse/add-warehouse.component';
import { ViewWarehouseComponent } from './view-warehouse/view-warehouse.component';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  declarations: [AddWarehouseComponent, ViewWarehouseComponent],
  imports: [
    CommonModule,
    NbInputModule,
    WarehouseRoutingModule,
    NbButtonModule,
    NbCardModule,
    ThemeModule,
    
  ]
})
export class WarehousesModule { }
