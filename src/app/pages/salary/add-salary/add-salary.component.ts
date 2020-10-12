import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {User, UserData} from '../../../@core/data/users';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ngx-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss'],
})
export class AddSalaryComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  selectedItem: any;
  users: User[];
  constructor(private userService: UserData) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.users = user);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
