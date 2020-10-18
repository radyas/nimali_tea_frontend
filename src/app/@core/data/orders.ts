import { Observable } from 'rxjs';
import { Customer } from './customer';


export class Orders{
    id:number;
    brand: string;
    weight:number;
    shipaddress:string;
    customer: Customer;
}
export abstract class OrdersData {
     abstract getOrders():Observable<Orders[]>;
}




