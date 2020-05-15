import { DeskService } from './../../desk.service';
import { Component, OnInit } from '@angular/core';

interface Ticket{
  ticketname:string,
  tickettype:string,
  ticketdis:string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tickets:Ticket[]=[];

  constructor(private ticket:DeskService) {

    this.tickets=this.ticket.ticketarry;

   }

  ngOnInit(): void {

  

    
  }

  


}
