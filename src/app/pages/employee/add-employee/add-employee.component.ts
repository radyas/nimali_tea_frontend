import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employee, User, UserData} from "../../../@core/data/users";
import {UserService} from "../../../@core/mock/users.service";
import {NbToastrService} from "@nebular/theme";
import {Department, DepartmentData} from "../../../@core/data/department";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'ngx-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  employee  = new Employee();
  departments: Department[];

  constructor(private empService: UserService, private toastrService: NbToastrService,
              private deptService: DepartmentData) { }

  ngOnInit(): void {
    this.deptService.getDepartments()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.departments = data);
  }

  onClick() {
    this.empService.addUser(this.employee).subscribe(cust => {
      console.log(this.employee);
      this.showToast('top-right');
      this.onClickCancel();
    });
  }
  onClickCancel() {
    this.employee = new Employee();

  }
  showToast(position) {
    this.toastrService.show(
      'User added successfully',
      `User`,
      { position , status: 'success' } );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
