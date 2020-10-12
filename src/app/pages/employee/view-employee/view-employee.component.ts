import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../@core/data/users';

@Component({
  selector: 'ngx-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  test;

  constructor(private employeeService: UserData) { }

  ngOnInit(): void {
    this.employeeService.getUsers().subscribe((users: any) => console.log(users))
    console.log(this.test)
  }

}
 