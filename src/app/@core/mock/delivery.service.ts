import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Delivery, DeliveryData } from '../data/delivery';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
  };


@Injectable()
export class DeliveryService extends DeliveryData {
    constructor(private http: HttpClient) {
        super();
    }

    getDeliveries(): Observable<any> {
        const apiUrl = 'http://localhost:4200/api/delivery/';
        return this.http.get(apiUrl, httpOptions);
    }

    getDelivery(delivery: Delivery): Observable<any> {
        const apiUrl = 'http://localhost:4200/api/delivery/';
        return this.http.get(apiUrl, httpOptions);
    }

    addDelivery(delivery: Delivery): Observable<any> {
        const apiUrl = 'http://localhost:4200/api/delivery/';
        return this.http.post(apiUrl , delivery, httpOptions);
    }
    updateDelivery(delivery: Delivery): Observable<any> {
        const apiUrl = 'http://localhost:4200/api/delivery/' + delivery.id + '/';
        return this.http.put(apiUrl , delivery, httpOptions);
    }
    deleteDelivery(delivery: Delivery): Observable<any> {
        const apiUrl = 'http://localhost:4200/api/delivery/' + delivery.id + '/';
        return this.http.delete(apiUrl, httpOptions);
    }

}
