import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProductsData } from '../data/products';



@Injectable()
export class ProductsService extends ProductsData{
    constructor(private http: HttpClient){
        super();
    }
    getProducts():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/Product/'
        return this.http.get(apiUrl)
    }
}