import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProviderData } from '../../../@core/data/provider';

@Component({
  selector: 'ngx-view-provider',
  templateUrl: './view-provider.component.html',
  styleUrls: ['./view-provider.component.scss']
})
export class ViewProviderComponent implements OnInit {
  data: LocalDataSource;

  constructor(private providerService: ProviderData) {
    this.data = new LocalDataSource;

    this.providerService.getProviders().subscribe(data => {
      this.data.load(data)
    })

   }

   ngOnInit(): void {}

   settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };


}
