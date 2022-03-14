import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
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
  error!:string;
  id!:number;

  onSubmit(){
    this.service.getUsers(this.uname,this.pwd).subscribe(data => {
      this.users=data; 
      this.role=this.users.map((t: { roles: any; })=>t.roles);
      this.id=this.users.map((s:{id:number})=>s.id);
      console.log(this.role);
      console.log(this.id); 
      if(this.role=='ADMIN'){
        console.log('logged in successfully');
        this.gotoAdminpage();
      }
      else if(this.role=='TRAVELLER'){
        this.service.setId(this.id);
        this.router.navigate(['/bookingform']);
      }
      else{
        this.error='Wrong username or password';
      }
    });
  }

  gotoAdminpage(){
    this.router.navigate(['/admin']);
  }

  gotoTravellerpage(){
    
  }
  gotoErrorpage(){
    this.router.navigate([])
  }

}
