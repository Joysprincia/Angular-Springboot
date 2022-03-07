import { Component, OnInit } from '@angular/core';
import { Users } from '../datahandling';
import { LoginformserviceService } from '../loginformservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  value!:Users;
  constructor(private obj:LoginformserviceService) {
    this.value=new Users();
   }

  ngOnInit(): void {
  }
}
