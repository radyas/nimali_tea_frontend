import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProviderData } from '../data/provider';



@Injectable()
export class ProviderService extends ProviderData{
    constructor(private http: HttpClient){
        super();
    }
    getProviders():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/providers/'
        return this.http.get(apiUrl)
    }
}