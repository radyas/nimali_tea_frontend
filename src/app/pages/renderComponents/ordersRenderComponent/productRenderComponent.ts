import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Orders } from '../../../@core/data/orders';
import { Products } from '../../../@core/data/products';

@Component({
    template: `
      {{renderValue}}
    `,
  })
  export class ProductRenderComponent implements ViewCell, OnInit {
  
    renderValue: string;
  
    @Input() value: string | number;
    @Input() rowData: Orders;
  
    ngOnInit() {
      this.renderValue = this.rowData.product.name.toString();
    }
  
  } 