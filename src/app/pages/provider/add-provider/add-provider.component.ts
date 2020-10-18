import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Provider } from '../../../@core/data/provider';

@Component({
  selector: 'ngx-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {

  provider = new Provider;

  constructor() {
  }

  ngOnInit() {

  }

  
}
