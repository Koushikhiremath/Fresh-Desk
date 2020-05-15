import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupform= new FormGroup({

    email:new FormControl(''),

    password:new FormControl('')
  })


  constructor() { }

  ngOnInit(): void {
  }

  onsignup(){

    console.log(this.signupform.value);
  }

}
