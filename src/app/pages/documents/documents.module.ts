import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ViewDocumentComponent } from './view-document/view-document.component';



@NgModule({
  declarations: [AddDocumentComponent, ViewDocumentComponent],
  imports: [
    CommonModule,
  ],
})
export class DocumentsModule { }
