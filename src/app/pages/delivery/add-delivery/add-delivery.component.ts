import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  constructor(private orderService:OrdersService,private toastrService: NbToastrService) { 

    this.orderService.getOrders()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.orders = data)

  }

  showToast(position) {
    this.toastrService.show(
      'This is super toast message',
      `This is toast number: ${++this.index}`,
      { position });
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  selectedItem = '2';

}
