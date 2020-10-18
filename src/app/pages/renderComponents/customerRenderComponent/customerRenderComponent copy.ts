import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

import { Delivery } from '../../../@core/data/delivery';


@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomerRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: Delivery;

  ngOnInit() {
    console.log(this.rowData)
    this.renderValue = this.rowData.order.customer.name.toString()
  }

}