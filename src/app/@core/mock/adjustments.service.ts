import {Adjustments, AdjustmentsData} from '../data/adjustments';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};

@Injectable()
export class AdjustmentsService extends AdjustmentsData {
  constructor(private http: HttpClient) {
    super();
  }
  getAdjustments(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/adjustment/';
    return this.http.get(apiUrl, httpOptions);
  }

  addAdjustment(adjustment: Adjustments): Observable<Adjustments> {
    const apiUrl = 'http://localhost:4200/api/adjustment/';
    return this.http.post<Adjustments>(apiUrl, adjustment, httpOptions);
  }
}
