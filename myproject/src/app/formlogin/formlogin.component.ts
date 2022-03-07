import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginformserviceService } from '../loginformservice.service';
import { Users } from '../Users';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {

  users!: any;
  uname!:string;
  pwd!:string;
  role!:string;
  constructor(private service:LoginformserviceService,private router:Router) { }

  ngOnInit(): void {

  }

  username!:string;
  error!:string;

  onSubmit(){
    this.service.getUsers(this.uname,this.pwd).subscribe(data => {
      this.users=data; 
      this.role=this.users.map((t: { roles: any; })=>t.roles);
      console.log(this.role); 
      if(this.role=='ADMIN'){
        console.log('logged in successfully');
        this.gotoAdminpage();
      }
      else if(this.role=='TRAVELLER'){
        
      }
      else{
        this.error='Wrong username and password';
      }
    });
  }

  gotoAdminpage(){
    this.router.navigate(['/admin']);
  }

  gotoErrorpage(){
    this.router.navigate([])
  }

}
