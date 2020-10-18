import { Observable } from 'rxjs';


export class Provider{
    id:number;
    name: string;
}
export abstract class ProviderData {
     abstract getProviders():Observable<Provider[]>;
}


