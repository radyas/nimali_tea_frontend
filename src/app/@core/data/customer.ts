import { Observable } from 'rxjs';

export class Customer {
    id: number;
    name: string;
    address: string;
    phone: number;
    email: string;

    // constructor(id, name, address, phone, email) {
    //     this.id = id;
    //     this.name = name;
    //     this.address = address;
    //     this.phone = phone;
    //     this.email = email;
    // }
}

export abstract class CustomerData {
    abstract getCustomers(): Observable<Customer[]>;
    abstract addCustomer(customer: Customer): Observable<Customer>;
}
