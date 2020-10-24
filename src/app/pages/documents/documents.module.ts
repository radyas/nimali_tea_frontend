import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DocumentRoutingModule } from './document-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddDocumentComponent, ViewDocumentComponent],
  imports: [
    CommonModule,
    NbInputModule,
    NbIconModule,
    Ng2SmartTableModule,
    DocumentRoutingModule,
    NbCardModule,
    ThemeModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbDatepickerModule,
    NbSelectModule,
    FormsModule,

  ],
})
export class DocumentsModule { }
export class PageModule { }
