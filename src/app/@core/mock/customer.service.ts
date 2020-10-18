import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sortByDomain } from '@swimlane/ngx-charts';
import { from, Observable } from 'rxjs';
import { Customer, CustomerData } from '../data/customer';
import { environment } from './../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ environment.token})
};


@Injectable()
export class CustomerService extends CustomerData {
   
  constructor(private http: HttpClient) {
    super();
  }

  getCustomers(): Observable<any>{
      let apiUrl = 'http://localhost:4200/api/customers/'
      return this.http.get(apiUrl, httpOptions)
  }

  addCustomer(customer: Customer): Observable<any>{
    let apiUrl = 'http://localhost:4200/api/customers/'
    return this.http.post<Customer>(apiUrl, customer, httpOptions);
  }
}
