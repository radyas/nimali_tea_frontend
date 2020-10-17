import {Component, OnDestroy, OnInit} from '@angular/core';
import {Adjustments, AdjustmentsData} from '../../../../@core/data/adjustments';
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
  adjustments = new Adjustments();
  constructor(private userService: UserData, private adjustmentService: AdjustmentsData) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.users = user);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onClick() {
    this.adjustmentService.addAdjustment(this.adjustments).subscribe(adj => console.log(this.adjustments));
  }

}
