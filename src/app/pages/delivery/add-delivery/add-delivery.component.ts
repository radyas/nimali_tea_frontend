import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Delivery } from '../../../@core/data/delivery';
import { Orders } from '../../../@core/data/orders';
import { Provider } from '../../../@core/data/provider';
import { DeliveryService } from '../../../@core/mock/delivery.service';
import { OrdersService } from '../../../@core/mock/orders.service';
import { ProviderService } from '../../../@core/mock/provider.service';

@Component({
  selector: 'ngx-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss']
})
export class AddDeliveryComponent implements OnInit,OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  orders: Orders[];
  providers: Provider[];
  private index: number = 0;
  delivery = new Delivery();
  

  constructor(private deliveryService: DeliveryService,private providerService:ProviderService,private orderService:OrdersService,private toastrService: NbToastrService) { 
 
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
      console.log(this.orders.length);
      console.log(this.orders)
    });


    this.providerService.getProviders().subscribe((data) => {
      this.providers = data;
      console.log(this.orders.length);
      console.log(this.orders)
    });

  }

  showToast(position) {
    this.delivery.address = "53/8c,Makuludoowa,Piliyandala,Colombo";
    this.delivery.value = "12";
    this.delivery.weight = "11";
    this.delivery.provider_id = 1;

    console.log(this.delivery.address)
    this.toastrService.show(
      'Demo Data',
      `Form filled with demo Data!`,
      { position , status: 'success' } ,);
  }

  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }

  ngOnInit(): void {
  }

  selectedItem = '0';
  linearMode = true;


  addDelivery(position){
    this.deliveryService.addDelivery(this.delivery).subscribe(delevery => console.log(delevery))
    this.toastrService.show(
      'Delivery',
      `Delivery added Successfully!`,
      { position , status: 'success' } ,);
  }


}
