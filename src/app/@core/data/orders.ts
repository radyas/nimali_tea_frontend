import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Products } from './products';


export class Orders {
    id: number;
    brand: string;
    weight: string;
    shipAddress: string;
    product: Products;
    customer: Customer;
    customer_id: string;
    product_id:string;
    date: string;
    // constructor(id, brand, weight, shipaddress) {
    //   this.id = id;
    //   this.brand = brand;
    //   this.weight = weight;
    //   this.shipaddress = shipaddress;
    // }
}
export abstract class OrdersData {
     abstract getOrders(): Observable<Orders[]>;
     abstract addOrders(orders: Orders): Observable<Orders>;
     abstract updateOrders(orders: Orders): Observable<Orders>;
     abstract deleteOrders(orders: Orders): Observable<any>;
}




