import { ProductsService } from './../../../@core/mock/products.service';
import { Products, ProductsData } from './../../../@core/data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  products = new Products();

  constructor(private productsService: ProductsData) { }

  ngOnInit(): void {
  }
  selectedItem = '2';

onClick() {
  this.productsService.addProducts(this.products).subscribe(pro => console.log(this.products));
  // console.log(this.Products);

}

cancel(){
  this.products = new Products();
}
}
