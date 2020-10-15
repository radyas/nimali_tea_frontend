import { Observable } from 'rxjs';


export class Orders{
    id:number;
    brand: string;
    weight:number;
    shipaddress:string;
}
export abstract class OrdersData {
     abstract getOrders():Observable<Orders[]>;
}




