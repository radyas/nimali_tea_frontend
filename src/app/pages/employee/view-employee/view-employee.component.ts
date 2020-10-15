import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserData } from '../../../@core/data/users';

@Component({
  selector: 'ngx-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  data: LocalDataSource;

  constructor(private userService: UserData) {
    this.data = new LocalDataSource();

    this.userService.getUsers().subscribe(data => {
      this.data.load(data)
    })
   }

  ngOnInit(): void {
  }

  settings = {
    columns: {
      first_name: {
        title: 'First Name'
      },
      last_name: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'Phone Number'
      },
      nic: {
        title: 'NIC'
      },
      dob: {
        title: 'Date of Birth'
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

}
