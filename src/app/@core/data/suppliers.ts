import { Observable } from 'rxjs';

// tslint:disable-next-line: one-line
export class Suppliers{
    id: number;
    name: string;
    phone: number;
    email: string;
}

export abstract class SuppliersData {
    abstract getSuppliers(): Observable<Suppliers[]>;
}








