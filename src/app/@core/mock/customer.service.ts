import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerData } from '../data/customer';




@Injectable()
export class CustomerService extends CustomerData {
   
  constructor(private http: HttpClient) {
    super();
  }

  getCustomers(): Observable<any>{
      let apiUrl = 'http://localhost:4200/api/customers/'
      return this.http.get(apiUrl)
  }
}
