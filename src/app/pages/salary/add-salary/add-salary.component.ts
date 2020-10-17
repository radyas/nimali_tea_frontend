import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User, UserData} from '../../../@core/data/users';
import {takeUntil} from 'rxjs/operators';
import {Salary, SalaryData} from '../../../@core/data/salary';

@Component({
  selector: 'ngx-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss'],
})
export class AddSalaryComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  selectedItem: any;
  users: User[];
  salary = new Salary();
  constructor(private userService: UserData, private salaryService: SalaryData) { }
  basic: number;
  add: number;
  ded: number;
  totaladd: number;
  totalded: number;
  sal: number;

  ngOnInit(): void {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.users = user);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onClick() {
    console.log(this.salary);
    // this.salaryService.addSalary(this.salary).subscribe(sal => console.log(this.salary));
  }
  onCalculate() {
  }
}
