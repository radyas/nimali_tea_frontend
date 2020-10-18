import { Observable } from 'rxjs';

// tslint:disable-next-line: one-line
export class Products{
    id: number;
    name: string;
    reference_number: number;
    quantity: number;
    price: number;
    type: string;
    location: string;
    weight: string;
    description: string;
    employee: number;

    // constructor(id, name, reference_nuumber, quantity, price, type, location, weight, description, employee){
    //     this.id = id;
    //     this.name = name;
    //     this.reference_number = reference_nuumber;
    //     this.quantity = quantity;
    //     this.price = price;
    //     this.type = type;
    //     this.location = type;
    //     this.weight = weight;
    //     this.description = description;
    //     this.employee = employee;
    // }
}

export abstract class ProductsData {
    abstract getProducts(): Observable<Products[]>;
    abstract addProducts(product: Products): Observable<Products>;
}

