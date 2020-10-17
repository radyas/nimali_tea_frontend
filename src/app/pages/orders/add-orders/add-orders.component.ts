import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer, CustomerData } from '../../../@core/data/customer';
import { Products, ProductsData } from '../../../@core/data/products';

@Component({
  selector: 'ngx-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss'],
})
export class AddOrdersComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  products: Products[];
  customers: Customer[];

  constructor(private productsService: ProductsData,
              private customerService: CustomerData,
            ) {

    this.productsService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.products = data),

    this.customerService.getCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.customers = data);
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  selectedItem = '2';
}
