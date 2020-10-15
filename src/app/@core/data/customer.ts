import { Observable } from 'rxjs';

export class Customer{
    id: number;
    name: string;
    address: string;
    phone: number;
    email: string;
}

export abstract class CustomerData {
    abstract getCustomers(): Observable<Customer[]>;
}