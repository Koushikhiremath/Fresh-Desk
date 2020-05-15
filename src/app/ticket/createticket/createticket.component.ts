import { DeskService } from './../../desk.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface Type {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {

  types: Type[] = [
    {value: 'AWS-0', viewValue: 'AWS'},
    {value: 'Development-1', viewValue: 'Development'},
    {value: 'Testing-2', viewValue: 'Testing'}
  ];



  createticketform =new FormGroup({

    ticketname:new FormControl(''),

    tickettype:new FormControl(''),

    ticketdis:new FormControl('')


  })

  constructor(private ticket:DeskService) { }

  ngOnInit(): void {
  }

  oncreateticket()
  {
    this.ticket.ticketarry.push(this.createticketform.value);
    console.log(this.ticket.ticketarry);

  }

}
