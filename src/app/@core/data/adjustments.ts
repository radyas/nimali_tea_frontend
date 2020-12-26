import {Observable} from 'rxjs';

export class Adjustments {
  id: number;
  type: string;
  amount: string;
  description: string;
  employee: string;
  date: string;
}

export abstract class AdjustmentsData {
  abstract getAdjustments(): Observable<Adjustments[]>;
  abstract addAdjustment(adjustment: Adjustments): Observable<Adjustments>;
}
