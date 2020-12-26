import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DeliveryService } from '../../../@core/mock/delivery.service';

@Component({
  selector: 'ngx-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.scss']
})
export class ViewDeliveryComponent implements OnInit {
  data: LocalDataSource;
  
  constructor(private deliveryService: DeliveryService) {

    this.data = new LocalDataSource;

    this.deliveryService.getDeliveries().subscribe(data => {
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
      order: {
        title: 'Order'
      },
      provider: {
        title: 'Provider'
      },
      date: {
        title: 'Date'
      },
      pickupDate: {
        title: 'Pickup Date'
      },

      status: {
        title: 'Status'
      },
      weight: {
        title: 'Weight'
      },
      value: {
        title: 'Value'
      },
      type: {
        title: 'Type'
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

}
