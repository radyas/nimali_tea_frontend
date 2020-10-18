import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { subscribeOn } from 'rxjs/operators';
import { Products, ProductsData } from '../../../@core/data/products';

@Component({
  selector: 'ngx-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  data: LocalDataSource;

  constructor(private productsService: ProductsData) { }

  ngOnInit(): void {
    this.data =  new LocalDataSource();

    this.productsService.getProducts()
        .subscribe(products => {
          this.data.load(products);

        });
  }
  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      quantity: {
        title: 'Quantity',
      },
      price: {
        title: 'Price',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
