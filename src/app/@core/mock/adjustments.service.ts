import {AdjustmentsData} from '../data/adjustments';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AdjustmentsService extends AdjustmentsData {
  constructor(private http: HttpClient) {
    super();
  }
  getAdjustments(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/adjustment/';
    return this.http.get(apiUrl);
  }
}
