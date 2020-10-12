import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentsData } from '../data/documents';


@Injectable()
export class DocumentsService extends DocumentsData {
   
  constructor(private http: HttpClient) {
    super();
  }

  getDocuments(): Observable<any>{
      let apiUrl = 'http://localhost:4200/api/documents/'
      return this.http.get(apiUrl)
  }
}
