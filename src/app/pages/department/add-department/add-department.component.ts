import { Component, OnInit } from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {Department, DepartmentData} from "../../../@core/data/department";

@Component({
  selector: 'ngx-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  department  = new Department();

  constructor(private deptService: DepartmentData, private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.deptService.addDepartment(this.department).subscribe(dept => {
      console.log(dept);
      this.showToast('top-right');
      this.onClickCancel();
    });
  }
  onClickCancel() {
    this.department = new Department();

  }
  showToast(position) {
    this.toastrService.show(
      'Department added successfully',
      `Department`,
      { position , status: 'success' } );
  }

}
