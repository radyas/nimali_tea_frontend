import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer, CustomerData } from '../../../@core/data/customer';
import { Orders, OrdersData } from '../../../@core/data/orders';
import { Products, ProductsData } from '../../../@core/data/products';

@Component({
  selector: 'ngx-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  products: Products[];
  customers: Customer[];

  constructor(private productsService: ProductsData,
              private customerService: CustomerData,
              private ordService:OrdersData
            ) {

    this.productsService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.products = data)

    this.customerService.getCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.customers = data)
   }
  orders = new Orders();

  ngOnInit(): void {
  }
  onClick(){
    this.ordService.addOrders(this.orders).subscribe(ord => console.log(this.orders))

  }
  onClickCancel(){
    this.orders= new Orders();

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
