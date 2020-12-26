import { Observable } from 'rxjs';
import { Provider } from './provider';


export class Branch{
    id:number;
    location: string;
    address : string;
    phoneNumber: string;
    contactPerson: string;
    name: string;
    provider: Provider;
}
export abstract class BranchData {
     abstract getProviders():Observable<Branch[]>;
}
