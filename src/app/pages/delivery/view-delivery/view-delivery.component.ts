import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Delivery } from "../../../@core/data/delivery";
import { DeliveryDefaults } from "../../../@core/data/deliveryDefault";
import { DeliveryService } from "../../../@core/mock/delivery.service";
import { ProviderRenderComponent } from '../../renderComponents/customerRenderComponent/providerRenderComponent';

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

  settings = {
    columns: {
      id: {
        title: "ID",
        filter: false,
      },
      order: {
        title: "Order",
        filter: false,
      },
      provider: {
        title: "Provider",
        filter: false,
        type: "custom",
        renderComponent: ProviderRenderComponent,
      },
      date: {
        title: "Date",
        filter: false,
      },
      pickupDate: {
        title: "Pickup Date",
        filter: false,
      },

      status: {
        title: "Status",
        filter: false,
      },
      weight: {
        title: "Weight",
        filter: false,
      },
      value: {
        title: "Value",
        filter: false,
      },
      type: {
        title: "Type",
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
