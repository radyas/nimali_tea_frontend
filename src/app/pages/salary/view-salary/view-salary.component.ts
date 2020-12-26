import { Component, OnInit } from '@angular/core';
import {SalaryData} from '../../../@core/data/salary';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-view-salary',
  templateUrl: './view-salary.component.html',
  styleUrls: ['./view-salary.component.scss'],
})
export class ViewSalaryComponent implements OnInit {
  data: LocalDataSource;
  constructor(private salservice: SalaryData) { }

  ngOnInit(): void {
    this.data = new LocalDataSource();
    this.salservice.getSalary()
      .subscribe(document => {
        this.data.load(document);
      });
  }
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      month: {
        title: 'Month',
        filter: false,
      },
      addition: {
        title: 'Total Additions',
        filter: false,
      },
      deduction: {
        title: 'Total Deductions',
        filter: false,
      },
      total: {
        title: 'Net Salary',
        filter: false,
      },
      issueDate: {
        title: 'Issue Date',
        filter: false,
      },
      employee: {
        title: 'Employee',
        filter: false,
      },
      },
      actions: {
        add: false,
        edit: false,
        delete: false,
      },
  };
}
