import { Component, OnInit } from '@angular/core';
import { Warehouses, WarehousesData } from '../../../@core/data/warehouses';

@Component({
  selector: 'ngx-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss'],
})
export class AddWarehouseComponent implements OnInit {

  warehouses = new Warehouses;


  constructor(private warehousesService: WarehousesData) { }

  ngOnInit(): void {
  }

  onClick() {
    this.warehousesService.addWarehouses(this.warehouses).subscribe(sup => console.log(this.warehouses));
    // console.log(this.Suppliers);

  }
  cancel() {
    this.warehouses = new Warehouses();
  }

}
