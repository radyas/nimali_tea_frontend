import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedItem = '2';
}
