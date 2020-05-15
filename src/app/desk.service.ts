import { Injectable } from '@angular/core';

interface Ticket{
  ticketname:string,
  tickettype:string,
  ticketdis:string
}

@Injectable({
  providedIn: 'root'
})
export class DeskService {

 public ticketarry:Ticket[]=[];



  constructor() { }
}
