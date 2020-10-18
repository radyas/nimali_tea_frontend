import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products, ProductsData } from '../data/products';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

};


@Injectable()
export class ProductsService extends ProductsData {
  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<any> {
      let apiUrl = 'http://localhost:4200/api/Product/';
      return this.http.get(apiUrl);
  }

  addProducts(product: Products): Observable<any> {
    let apiUrl = 'http://localhost:4200/api/Product/';
    return this.http.post<Products>(apiUrl, Products);
  }

}
