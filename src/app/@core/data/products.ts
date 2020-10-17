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
}

export abstract class ProductsData {
    abstract getProducts(): Observable<Products[]>;
}

