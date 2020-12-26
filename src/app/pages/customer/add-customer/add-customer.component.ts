import { Component, OnInit } from '@angular/core';
import { Customer, CustomerData } from '../../../@core/data/customer';

@Component({
  selector: 'ngx-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer  = new Customer();

  constructor(private custService: CustomerData) { }

  ngOnInit(): void {
  }

  onClick() {
    this.custService.addCustomer(this.customer).subscribe(cust => console.log(this.customer));
  }
  onClickCancel(){
    this.customer= new Customer();

  }
}
