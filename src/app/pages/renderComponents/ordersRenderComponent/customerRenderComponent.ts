import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Customer } from '../../../@core/data/customer';
import { Orders } from '../../../@core/data/orders';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomerRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: Orders;

  ngOnInit() {
    this.renderValue = this.rowData.customer.name
  }

} 