import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedItem = '2';
}
