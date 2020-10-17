import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuppliersData } from '../data/suppliers';


@Injectable()
export class SuppliersService extends SuppliersData {
  constructor(private http: HttpClient) {
    super();
  }

  getSuppliers(): Observable<any> {
      let apiUrl = 'http://localhost:4200/api/Supplier/';
      return this.http.get(apiUrl);
  }
}
