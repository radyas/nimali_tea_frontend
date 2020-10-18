import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Department, DepartmentData } from '../../../@core/data/department';
import { Documents, DocumentsData } from '../../../@core/data/documents';
import { DocumentsService } from '../../../@core/mock/documents.service';

@Component({
  selector: 'ngx-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject <void>();
  departments: Department[];

  constructor(private deptService: DepartmentData,
              private docService: DocumentsData) { }
 documents = new Documents()
  ngOnInit(): void {
    this.deptService.getDepartments()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dept => this.departments = dept)
  }
  onClick(){
     this.docService.addDocuments(this.documents).subscribe(ord => console.log(this.documents))
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
