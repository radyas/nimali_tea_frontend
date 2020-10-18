import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Warehouses, WarehousesData } from '../data/warehouses';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};


@Injectable()
export class WarehousesService extends WarehousesData {
  constructor(private http: HttpClient) {
    super();
  }

  getWarehouses(): Observable<any> {
      let apiUrl = 'http://localhost:4200/api/Warehouse/';
      return this.http.get(apiUrl, httpOptions);
  }

  addWarehouses(warehouse: Warehouses): Observable<Warehouses> {
    let apiUrl = 'http://localhost:4200/api/Warehouse/';
    return this.http.post<Warehouses>(apiUrl, warehouse, httpOptions);
  }
}
