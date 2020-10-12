import {Component, OnDestroy, OnInit} from '@angular/core';
import {Adjustments} from '../../../../@core/data/adjustments';
import {Subject} from 'rxjs';
import {AdjustmentsService} from '../../../../@core/mock/adjustments.service';
import {takeUntil} from 'rxjs/operators';
import {User, UserData} from '../../../../@core/data/users';

@Component({
  selector: 'ngx-add-adjustments',
  templateUrl: './add-adjustments.component.html',
  styleUrls: ['./add-adjustments.component.scss'],
})
export class AddAdjustmentsComponent implements OnInit, OnDestroy {
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
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
