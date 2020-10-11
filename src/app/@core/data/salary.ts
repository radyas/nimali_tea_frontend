import {Observable} from 'rxjs';

export class Salary {
  id: number;
  month: string;
  total: string;
  issueDate: string;
  employee: string;
}

export abstract class SalaryData {
  abstract getSalary(): Observable<Salary[]>;
}
