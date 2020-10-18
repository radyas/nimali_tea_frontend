import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products, ProductsData } from '../data/products';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};


@Injectable()
export class ProductsService extends ProductsData {
  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<any> {
      let apiUrl = 'http://localhost:4200/api/Product/';
      return this.http.get(apiUrl, httpOptions);
  }

  addProducts(product: Products): Observable<Products> {
    let apiUrl = 'http://localhost:4200/api/Product/';
    return this.http.post<Products>(apiUrl, product, httpOptions);
  }

}
