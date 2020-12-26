import { Observable } from 'rxjs';
import { Orders } from './orders';
import { Provider } from './provider';


export class Delivery{
    id:number;
    provider: Provider;
    date:string;
    pickupDate:string;
    status:string;
    weight:string;
    value:string;
    address:string;
    order: Orders;
    
}
export abstract class DeliveryData {
    abstract getDeliveries():Observable<Delivery[]>;
    abstract getDelivery(delivery : Delivery):Observable<Delivery>;
    abstract addDelivery(delivery : Delivery):Observable<Delivery>;
    abstract updateDelivery(delivery : Delivery):Observable<Delivery>;
    abstract deleteDelivery(delivery : Delivery):Observable<any>;
}

