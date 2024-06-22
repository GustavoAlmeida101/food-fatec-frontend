import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  success: boolean = false;
  errors!: String[];
  displayedColumns: string[] = ['idCustomer', 'firstNameCustomer','lastNameCustomer', 'cpfCustomer','birthdateCustomer','dateCreateCustomer','monthlyIncomeCustomer',
  'statusCustomer','emailCustomer', 'deleteCustomer', 'findCustomer'];
  ELEMENT_DATA: Customer[] = [];
  message: string = '';
  dataSource = new MatTableDataSource<Customer>(this.ELEMENT_DATA);

  constructor(
    private service: CustomerService
  ) { }

  ngOnInit(): void {
    
  }

  customer: Customer = {
    idCustomer: '',
    firstNameCustomer:'',
    lastNameCustomer: '',
    cpfCustomer:'',
    birthdateCustomer:'',
    dateCreateCustomer:'',
    monthlyIncomeCustomer:'',
    statusCustomer:true,
    emailCustomer:'',
    passwordCustomer:'',

  }

  saveCustomer() {
    const datePipe = new DatePipe('en-US');
    this.customer.birthdateCustomer = datePipe.transform(this.customer.birthdateCustomer,'dd/MM/yyyy');

    this.service.save(this.customer).subscribe((response: any) => {
      this.success = true;
      this.errors = [];
      this.customer = response.result as Customer;
      var date = this.customer.birthdateCustomer;
      var newDate = date.split("/").reverse().join("-");
      this.customer.birthdateCustomer = newDate
      
      
    });


  }


  }

