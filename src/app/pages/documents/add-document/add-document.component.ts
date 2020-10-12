import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Department, DepartmentData } from '../../../@core/data/department';

@Component({
  selector: 'ngx-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject <void>();
  departments: Department[];

  constructor(private deptService: DepartmentData) { }

  ngOnInit(): void {
    this.deptService.getDepartments()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dept => this.departments = dept)
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
