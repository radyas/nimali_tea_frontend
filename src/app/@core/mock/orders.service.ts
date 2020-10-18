import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OrdersData } from '../data/orders';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ environment.token})
  };

@Injectable()
export class OrdersService extends OrdersData{
    constructor(private http: HttpClient){
        super();
    }
    getOrders():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/orders/'
        return this.http.get(apiUrl,httpOptions)
    }
}