import { Observable } from 'rxjs';

export class Warehouses {
    id: number;
    name: string;
    address: string;
}

export abstract class WarehousesData {
    abstract getWarehouses(): Observable<Warehouses[]>;
}
