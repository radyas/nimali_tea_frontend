import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Customer, CustomerData } from '../../../@core/data/customer';

@Component({
  selector: 'ngx-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
})
export class ViewCustomerComponent implements OnInit {
  data: LocalDataSource;

  constructor(private custService: CustomerData) {
    this.data = new LocalDataSource();

    this.custService.getCustomers().subscribe(data => {
      this.data.load(data);
    });
   }

  ngOnInit(): void {
  }

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Customer Name',
      },
      address: {
        title: 'Address',
      },
      phone: {
        title: 'Phone number',
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

