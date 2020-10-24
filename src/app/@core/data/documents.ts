import { Observable } from 'rxjs';

export class Documents{
    id: number;
    name: string;
    docCode: string;
    status: string;
    docType: string;
    issueAuthority: string;
    createDate: Date;
    department: string;
}

export abstract class DocumentsData {
    abstract getDocuments(): Observable<Documents[]>;
    abstract addDocuments(documents:Documents): Observable<Documents>;
}
