import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';



@NgModule({
  declarations: [AddBranchComponent, ViewBranchComponent],
  imports: [
    CommonModule
  ]
})
export class BranchModule { }
