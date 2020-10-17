import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DocumentRoutingModule } from './document-routing.module';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [AddDocumentComponent, ViewDocumentComponent, EditComponent],
  imports: [
    CommonModule,
    NbInputModule,
    NbIconModule,
    Ng2SmartTableModule,
    DocumentRoutingModule,
    NbCardModule,
  ],
})
export class DocumentsModule { }
