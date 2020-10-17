import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WarehousesData } from '../data/warehouses';


@Injectable()
export class WarehousesService extends WarehousesData {
  constructor(private http: HttpClient) {
    super();
  }

  getWarehouses(): Observable<any> {
      let apiUrl = 'http://localhost:4200/api/Warehouse/';
      return this.http.get(apiUrl);
  }
}
