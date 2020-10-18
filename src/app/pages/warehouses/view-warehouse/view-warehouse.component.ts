import { Warehouses } from './../../../@core/data/warehouses';
import { WarehousesService } from './../../../@core/mock/warehouses.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Department, DepartmentData } from '../../../@core/data/department';
import { WarehousesData } from '../../../@core/data/warehouses';

@Component({
  selector: 'ngx-view-department',
  templateUrl: './view-warehouse.component.html',
  styleUrls: ['./view-warehouse.component.scss']
})
export class ViewWarehouseComponent implements OnInit {
  data: LocalDataSource;

  constructor(private warehousesService: WarehousesData) {
    this.data = new LocalDataSource();

    this.warehousesService.getWarehouses().subscribe(warehouses => {
      this.data.load(warehouses);
    })
   }

  ngOnInit(): void {
  }

  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      address: {
        title: 'Department Address',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

}
