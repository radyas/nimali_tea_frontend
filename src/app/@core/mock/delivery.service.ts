import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { DeliveryData } from '../data/delivery';



@Injectable()
export class DeliveryService extends DeliveryData{
    constructor(private http: HttpClient){
        super();
    }
    getDeliveries():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/delivery/'
        return this.http.get(apiUrl)
    }
}