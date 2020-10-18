import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentsData } from '../data/documents';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ environment.token})
};

@Injectable()
export class DocumentsService extends DocumentsData {
   



  constructor(private http: HttpClient) {
    super();
  }

  getDocuments(): Observable<any>{
      let apiUrl = 'http://localhost:4200/api/documents/'
      return this.http.get(apiUrl,httpOptions)
  }
}
