import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { subscribeOn } from 'rxjs/operators';
import { Suppliers, SuppliersData } from '../../../@core/data/suppliers';

@Component({
  selector: 'ngx-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.scss'],
})
export class ViewSupplierComponent implements OnInit {
  data: LocalDataSource;

  constructor(private SuppliersService: SuppliersData) { }

  ngOnInit(): void {
    this.data =  new LocalDataSource();

    this.SuppliersService.getSuppliers()
        .subscribe(suppliers => {
          this.data.load(suppliers);

        });
  }
  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      phone: {
        title: 'Phone',
      },
      email: {
        title: 'Email',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
