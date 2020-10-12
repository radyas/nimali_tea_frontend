import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {User, UserData} from '../../../@core/data/users';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ngx-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.scss'],
})
export class AddAttendanceComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  selectedItem: any;
  users: User[];
  selectedOption: any;
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
