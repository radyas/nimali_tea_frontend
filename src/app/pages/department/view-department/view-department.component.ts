import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Department, DepartmentData } from '../../../@core/data/department';

@Component({
  selector: 'ngx-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent implements OnInit {
  data: LocalDataSource;

  constructor(private deptService: DepartmentData) {
    this.data = new LocalDataSource();

    this.deptService.getDepartments().subscribe(data => {
      this.data.load(data)
    })
   }

  ngOnInit(): void {
  }

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Department Name'
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

}
