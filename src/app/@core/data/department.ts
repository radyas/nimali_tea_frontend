import { Observable } from 'rxjs';

export class Department {
    id: number;
    name: string;
}
export abstract class DepartmentData {
    abstract getDepartments(): Observable<Department[]>;
}
