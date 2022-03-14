import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginformserviceService } from '../loginformservice.service';

import { Users } from '../Users';



@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {
  user!:Users;
  id!: number;
  constructor(private service:LoginformserviceService) {
  }
  
  ngOnInit(): void {
    this.id=this.service.getId();
  }

}
function getState() {
  throw new Error('Function not implemented.');
}

