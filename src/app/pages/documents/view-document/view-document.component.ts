import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DocumentsData } from '../../../@core/data/documents';

@Component({
  selector: 'ngx-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent implements OnInit {
  data: LocalDataSource;

  constructor(private documentsService: DocumentsData) { }

  ngOnInit(): void {
    this.data = new LocalDataSource();

    this.documentsService.getDocuments()
      .subscribe(documents => {
        this.data.load(documents)
      })
  }

  settings = {
    columns: {
      name: {
        title: 'Document Name',
      },
      docCode: {
        title: "Document Code",
      },
      status: {
        title: 'Status',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

}
