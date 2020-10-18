import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Delivery } from '../../../@core/data/delivery';
import { Orders } from '../../../@core/data/orders';
import { OrdersService } from '../../../@core/mock/orders.service';

@Component({
  selector: 'ngx-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss']
})
export class AddDeliveryComponent implements OnInit,OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  orders: Orders[];
  private index: number = 0;
  delivery = new Delivery();

  constructor(private orderService:OrdersService,private toastrService: NbToastrService) {

  }

  showToast(position) {
    console.log(this.delivery)
    this.toastrService.show(
      'This is super toast message',
      `This is toast number: ${this.delivery.status}`,
      { position , status: 'info' } ,);
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }

  ngOnInit(): void {
  }

  selectedItem = '2';

}
