import { Products } from './../../../@core/data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  Products = new Products();

  constructor() { }

  ngOnInit(): void {
  }
  selectedItem = '2';

onClick() {
  console.log(this.Products.id);
  console.log(this.Products.name);
  console.log(this.Products.reference_number);
  console.log(this.Products.quantity);
  console.log(this.Products.price);
  console.log(this.Products.type);
  console.log(this.Products.location);
  console.log(this.Products.weight);
  console.log(this.Products.description);
  
}
}
