import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginformserviceService } from '../loginformservice.service';
import { Users } from '../Users';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users:Users =new Users();
  constructor(private service:LoginformserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.service.addUser(this.users).subscribe(data=>{
      console.log(data);
      this.router.navigate(['formlogin']);
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.saveUser();
  }
}
