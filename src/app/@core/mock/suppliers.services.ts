import { Suppliers } from './../data/suppliers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuppliersData } from '../data/suppliers';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};

@Injectable()
export class SuppliersService extends SuppliersData {
  constructor(private http: HttpClient) {
    super();
  }

  getSuppliers(): Observable<any> {
      let apiUrl = 'http://localhost:4200/api/Supplier/';
      return this.http.get(apiUrl, httpOptions);
  }

  addSuppliers(supplier: Suppliers): Observable<Suppliers> {
    let apiUrl = 'http://localhost:4200/api/Supplier/';
    return this.http.post<Suppliers>(apiUrl, supplier, httpOptions);
  }
}
