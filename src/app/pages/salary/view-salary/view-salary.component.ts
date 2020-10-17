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
      },
      month: {
        title: 'Month',
      },
      addition: {
        title: 'Total Additions',
      },
      deduction: {
        title: 'Total Deductions',
      },
      total: {
        title: 'Net Salary',
      },
      issueDate: {
        title: 'Issue Date',
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
