import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User, UserData} from '../../../@core/data/users';
import {takeUntil} from 'rxjs/operators';
import {Salary, SalaryData} from '../../../@core/data/salary';
import {Adjustments, AdjustmentsData} from '../../../@core/data/adjustments';
import {Designation, DesignationData} from "../../../@core/data/designation";

@Component({
  selector: 'ngx-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss'],
})
export class AddSalaryComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private retrivedata: Array<any> = [];
  selectedItem: any;
  users: User[];
  basicSal: number;
  totalAdd: number;
  totalDed: number;
  totalSal: number;
  adjustment: Adjustments[];
  designation: Designation[];
  adjs: Observable<Adjustments[]>;
  salary = new Salary();
  constructor(private userService: UserData,
              private salaryService: SalaryData, private adjustmentService: AdjustmentsData, private designationService: DesignationData) {
  }

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
    this.salaryService.addSalary(this.salary).subscribe(sal => console.log(this.salary));
  }
  onCalculate() {
    let emp = Number(this.salary.employee);
    this.designationService.getDesignation()
      .pipe(takeUntil(this.destroy$))
      .subscribe(des =>{
        this.designation = des;
        for (let entry of this.designation){
          if (entry.employee === emp) {
            this.basicSal = Number(entry.basicSal);
          }
        }
      });
    let add = 0;
    let ded = 0;
    this.adjustmentService.getAdjustments()
      .pipe(takeUntil(this.destroy$))
      .subscribe(adj => {
        this.adjustment = adj;
        for (let entry of this.adjustment) {
          let dat = new Date(entry.date);
          let mont = dat.getMonth() + 1;
          if (entry.type === 'addition' && entry.employee === emp && mont === this.salary.month) {
            let num = Number(entry.amount);
            add = add + num;
          }
          else if (entry.type === 'deduction' && entry.employee === emp && mont === this.salary.month) {
            let num = Number(entry.amount);
            ded = ded + num;
          }
          this.totalAdd = add;
          this.totalDed = ded;
        }
        this.totalSal = this.basicSal + this.totalAdd - this.totalDed;
        document.getElementById('basicsal').setAttribute('value', String(this.basicSal));
        this.salary.addition = String(this.totalAdd);
        this.salary.deduction = String(this.totalDed);
        this.salary.total = String(this.totalSal);
      });
  }
}
