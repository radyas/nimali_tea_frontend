import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BranchData } from '../data/branch';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ environment.token})
  };


@Injectable()
export class BranchService extends BranchData{

    
    constructor(private http: HttpClient){
        super();
    }
    getProviders():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/branch/'
        return this.http.get(apiUrl , httpOptions)
    }
}