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

  tickets:Ticket[]=[{
    ticketname:'Hello',
    tickettype:'AWS',
    ticketdis:'Hi'


  }];

  constructor(private ticket:DeskService) { }

  ngOnInit(): void {

    
  }


}
