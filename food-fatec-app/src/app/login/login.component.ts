import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  email:string='';
  password: String = '';
  loginError:boolean = false;

  constructor() {}

  ngOnInit(): void {
      
  }
   onSutbmit(){
    console.log(`User:${this.email},Pass: ${this.password}`);
   }

}
