import { Component, OnInit } from '@angular/core';
import {AdjustmentsData} from '../../../../@core/data/adjustments';

@Component({
  selector: 'ngx-view-adjustments',
  templateUrl: './view-adjustments.component.html',
  styleUrls: ['./view-adjustments.component.scss'],
})
export class ViewAdjustmentsComponent implements OnInit {

  constructor(private adjservice: AdjustmentsData) { }

  // @ts-ignore
  ngOnInit(): void {
    this.adjservice.getAdjustments()
      .subscribe(data => console.log(data));
  }

}
