import { Observable } from 'rxjs';

export class Documents{
    id: number;
    name: string;
    docCode: string;
    status: string;
    issueAuthority: string;
    createDate: Date;
    department: number;
}

export abstract class DocumentsData {
    abstract getDocuments(): Observable<Documents[]>;
}
