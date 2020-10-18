import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { OrdersData } from '../data/orders';


@Injectable()
export class OrdersService extends OrdersData{
    constructor(private http: HttpClient){
        super();
    }
    getOrders():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/orders/'
        return this.http.get(apiUrl)
    }
}