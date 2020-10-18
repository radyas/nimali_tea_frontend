import {Observable} from 'rxjs';

export class Designation {
  id: number;
  basicSal: string;
  role: string;
  employee;
}

export abstract class DesignationData {
  abstract getDesignation(): Observable<Designation[]>;
}
