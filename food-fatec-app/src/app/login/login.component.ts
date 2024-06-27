import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

import { MatTableDataSource } from '@angular/material/table';
import { UserLogin } from '../model/Userlogin';
import e from 'express';
import { ResponseLogin } from '../model/ResponseLogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 
  email:string='';
  password: string = '';
  loginError:boolean = false;

 

  constructor(
    private service: LoginService
  ) { }

  ngOnInit(): void {
  }

  userLogin: UserLogin = {
    emailCustomer: '',
    passwordCustomer: ''
  }

  responseLogin: ResponseLogin = {
    token: '',
    refresh: ''
  }

  onSubmit() {
    this.service.login(this.userLogin).subscribe((response: any) => {
      console.log(response.token)
    });
  }
}
