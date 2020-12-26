import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ViewDocumentComponent } from './view-document/view-document.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'add',
      component: AddDocumentComponent,
    },
    {
      path: 'view',
      component: ViewDocumentComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentRoutingModule {
}
