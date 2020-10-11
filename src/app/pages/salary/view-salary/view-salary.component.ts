import { Component, OnInit } from '@angular/core';
import {SalaryData} from '../../../@core/data/salary';

@Component({
  selector: 'ngx-view-salary',
  templateUrl: './view-salary.component.html',
  styleUrls: ['./view-salary.component.scss'],
})
export class ViewSalaryComponent implements OnInit {

  constructor(private salservice: SalaryData) { }

  ngOnInit(): void {
    this.salservice.getSalary()
      .subscribe(data => console.log(data));
  }

}
