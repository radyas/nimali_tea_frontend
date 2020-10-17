import { Observable } from 'rxjs';


export class Products {
    id: number;
    name: string;
    reference_number: string;
    quantity: string;
    price: string;
    type: string;
    location: string;
    weight: string;
    description: string;
}
export abstract class ProductsData {
     abstract getProducts(): Observable<Products[]>;
}




