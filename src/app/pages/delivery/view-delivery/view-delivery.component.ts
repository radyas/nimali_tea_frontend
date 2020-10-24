import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Delivery } from "../../../@core/data/delivery";
import { DeliveryDefaults } from "../../../@core/data/deliveryDefault";
import { DeliveryService } from '../../../@core/mock/delivery.service';
import { CustomerRenderComponent } from '../../renderComponents/customerRenderComponent/customerRenderComponent copy';
import { DeliveryRenderComponent } from '../../renderComponents/customerRenderComponent/deliveryRenderComponent';

@Component({
  selector: "ngx-view-delivery",
  templateUrl: "./view-delivery.component.html",
  styleUrls: ["./view-delivery.component.scss"],
})
export class ViewDeliveryComponent implements OnInit {
  data: LocalDataSource;

  private alive = true;

  deliveries: Delivery[] = [];
  deliveryDefault: DeliveryDefaults;
  type = "month";
  types = ["week", "month", "year"];
  currentTheme: string;

  constructor(private deliveryService: DeliveryService) {
    this.deliveryDefault = new DeliveryDefaults();
    this.deliveryDefault.max = 10;
    this.data = new LocalDataSource();
    this.deliveryService.getDeliveries().subscribe((data) => {
      this.data.load(data);
      this.deliveries = data;
      console.log(this.deliveries.length);
      this.deliveryDefault.current = this.deliveries.length;
    });
  }

  ngOnInit(): void {}

  onDeleteConfirm(event) {
    console.log('Delete');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      order: {
        title: 'Customer',
        type: 'custom',
        renderComponent: CustomerRenderComponent,
        filter: false,
      },
      provider: {
        title: 'Provider',
        filter: false,
        type: 'custom',
        renderComponent: DeliveryRenderComponent,
      },
      date: {
        title: 'Date',
        filter: false,
      },
      pickupDate: {
        title: 'Pickup Date',
        filter: false,
      },

      status: {
        title: 'Status',
        filter: true,
      },
      weight: {
        title: 'Weight',
        filter: false,
      },
    },
    actions: {
      add: false,
      edit: true,
      delete: true,
    },
    delete: {
      deleteConfirm : true,
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
  };
}
