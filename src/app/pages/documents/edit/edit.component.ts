import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DocumentsData } from '../../../@core/data/documents';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  data: LocalDataSource;

  constructor(private documentsService: DocumentsData) { }

  ngOnInit(): void {
    this.data = new LocalDataSource();

    this.documentsService.getDocuments()
    .subscribe(documents =>{
      console.log(documents)
    })

  }

}
