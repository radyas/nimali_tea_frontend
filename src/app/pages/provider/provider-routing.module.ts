import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';

const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'add',
        component: AddProviderComponent,
      },
      {
        path: 'view',
        component: ViewProviderComponent,
      },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProviderRoutingModule {
  }
  