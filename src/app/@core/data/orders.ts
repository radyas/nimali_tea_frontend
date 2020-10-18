import { Observable } from 'rxjs';


export class Orders {
    id: number;
    brand: string;
    weight: string;
    shipAddress: string;
    product: string;
    customer: string;
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
}




