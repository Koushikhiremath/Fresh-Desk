import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform= new FormGroup({

    email:new FormControl(''),

    password:new FormControl('')
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onlogin(){

    console.log(this.loginform.value);

  }

}
