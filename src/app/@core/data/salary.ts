import {Observable} from 'rxjs';

export class Salary {
  id: number;
  month: string;
  addition: string;
  deduction: string;
  total: string;
  issueDate: string;
  employee: string;
}

export abstract class SalaryData {
  abstract getSalary(): Observable<Salary[]>;
  abstract addSalary(salary: Salary): Observable<Salary>;
}
