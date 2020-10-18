import { Component, OnInit } from '@angular/core';
import {AdjustmentsData} from '../../../../@core/data/adjustments';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-view-adjustments',
  templateUrl: './view-adjustments.component.html',
  styleUrls: ['./view-adjustments.component.scss'],
})
export class ViewAdjustmentsComponent implements OnInit {
  data: LocalDataSource;
  constructor(private adjservice: AdjustmentsData) { }

  // @ts-ignore
  ngOnInit(): void {
    this.data = new LocalDataSource();
    this.adjservice.getAdjustments()
      .subscribe(document => {
        this.data.load(document);
      });
  }

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      type: {
        title: 'Type',
      },
      amount: {
        title: 'Amount',
      },
      date: {
        title: 'Date',
      },
      description: {
        title: 'Description',
      },
      employee: {
        title: 'Employee',
      },
      },
      actions: {
        add: false,
        edit: false,
        delete: false,
      },
  };
}
