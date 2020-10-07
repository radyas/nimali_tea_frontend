import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';



@NgModule({
  declarations: [AddProviderComponent, ViewProviderComponent],
  imports: [
    CommonModule
  ]
})
export class ProviderModule { }
