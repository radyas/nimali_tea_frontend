import { Observable } from 'rxjs';


export class Delivery{
    id:number;
    provider: string;
    date:string;
    pickupDate:string;
    status:string;
    weight:string;
    value:string;
    type:string;
}
export abstract class DeliveryData {
     abstract getDeliveries():Observable<Delivery[]>;
}

