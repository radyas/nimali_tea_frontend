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
  newdelivery = new Delivery();
  neworder = new Orders()
  newprovider = new Provider()

  constructor(private deliveryService: DeliveryService,private providerService:ProviderService,private orderService:OrdersService,private toastrService: NbToastrService) { 
 
  
    this.newdelivery.order = this.neworder;
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
    this.newdelivery.address = "53/8c,Makuludoowa,Piliyandala,Colombo";
    console.log(this.newdelivery.address)
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

  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }

  addDelivery(){
    console.log(this.newprovider.id)
    console.log(this.neworder.id)
    this.newdelivery.order = this.orders[1]
    this.newdelivery.provider = this.providers[0]
    console.log(this.orders[0].customer)
    console.log(this.providers[0].name)
    this.deliveryService.addDelivery(this.newdelivery).subscribe(delevery => console.log(delevery))
  }


}
