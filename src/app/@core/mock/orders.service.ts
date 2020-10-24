import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { sortByDomain } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Orders,  OrdersData } from '../data/orders';

const httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Token ' + environment.token})
};

@Injectable()
export class OrdersService extends OrdersData{
    constructor(private http: HttpClient){
        super();
    }
    getOrders():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/orders/'
        return this.http.get(apiUrl,httpOptions);

    }
    addOrders(orders:Orders):Observable<any>{
        console.log(orders)
        let apiUrl = 'http://localhost:4200/api/orders/'
        return this.http.post<Orders>(apiUrl,orders,httpOptions);
    }
    updateOrders(orders:Orders):Observable<any>{
        let apiUrl = 'http://localhost:4200/api/orders/'+ "orders.id "+ '/'
        return this.http.put<Orders>(apiUrl,orders,httpOptions);
    }
    deleteOrders(orders:Orders):Observable<any>{
        console.log("deleted")
        let apiUrl = 'http://localhost:4200/api/orders/' + "orders.id" + '/'
        return this.http.delete<Orders>(apiUrl,httpOptions);
    }
}
