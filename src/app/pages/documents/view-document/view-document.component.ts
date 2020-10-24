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
        // filter: false,
      },
      docCode: {
        title: "Document Code",
        // filter: false,
      },
      status: {
        title: 'Status',
        // filter: false,
      },
      docType: {
      title: 'Document Type',
      // filter: false,
      },
      issueAuthority: {
        title: 'Issued Authority',
        // filter: false,
      },
      createDate: {
        title: 'Created Date',
        // filter: false,
      },
      department: {
        title: 'Department',
        // filter: false,
      },
    },
    actions: {
      add: true,
      edit: true,
       delete: true,
    } ,
    add: {
      addButtonContent: '<i  class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark" ></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
  
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',

    }, 
  };

}
