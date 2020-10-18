import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import {NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbIconModule} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddProductComponent, ViewProductComponent],
  imports: [
    CommonModule,
    NbSelectModule,
    ProductsRoutingModule,
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbIconModule,
    FormsModule,
  ],
})
export class ProductsModule { }
