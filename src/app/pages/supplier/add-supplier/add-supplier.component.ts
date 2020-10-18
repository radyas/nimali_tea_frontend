import { Suppliers, SuppliersData } from './../../../@core/data/suppliers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss'],
})
export class AddSupplierComponent implements OnInit {

  suppliers = new Suppliers;

  constructor(private suppliersService: SuppliersData) { }

  ngOnInit(): void {
  }

  onClick() {
    this.suppliersService.addSuppliers(this.suppliers).subscribe(sup => console.log(this.suppliers));
    // console.log(this.Suppliers);

  }

  cancel() {
    this.suppliers = new Suppliers();
  }
  }



