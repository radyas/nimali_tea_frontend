import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Provider, ProviderData } from '../data/provider';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ environment.token})
  };


@Injectable()
export class ProviderService extends ProviderData{
    constructor(private http: HttpClient){
        super();
    }
    getProviders():Observable<any>{
        let apiUrl = 'http://localhost:4200/api/provider/'
        return this.http.get(apiUrl,httpOptions)
    }

    
    addProvider(provider : Provider):Observable<any>{
        let apiUrl = 'http://localhost:4200/api/provider/'
        return this.http.post(apiUrl , provider, httpOptions)
    }
    
    updateProvider(provider : Provider):Observable<any>{
        let apiUrl = 'http://localhost:4200/api/provider/' + provider.id +'/'
        return this.http.put(apiUrl , provider, httpOptions)
    }
    
    deleteProvider(provider : Provider):Observable<any>{
        let apiUrl = 'http://localhost:4200/api/provider/'+ provider.id + '/'
        return this.http.delete(apiUrl, httpOptions)
    }
}