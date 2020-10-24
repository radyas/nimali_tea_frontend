import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { OrdersData } from '../../../@core/data/orders';
import { ProductRenderComponent } from '../../renderComponents/ordersRenderComponent/ProductRenderComponent';

@Component({
  selector: 'ngx-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {
  data: LocalDataSource;

  constructor(private orderService: OrdersData){
    this.data = new LocalDataSource;

    this.orderService.getOrders().subscribe(data => {
      this.data.load(data)
    })
  }

  ngOnInit(): void {
  }

  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      id: {
        title: 'ID'
      },
      product: {
        title: "Product",
        filter: false,
        type: "custom",
        renderComponent: ProductRenderComponent,
      },
      brand: {
        title: 'Brand'
      },
      weight: {
        title: 'Weight'
      },
      shipAddress: {
        title: 'Ship Address'
      },
      date: {
        title: 'Date'
      },
    },
    actions: {
      add: false,
      // edit: false,
      // delete: false,
    }
  };



}




