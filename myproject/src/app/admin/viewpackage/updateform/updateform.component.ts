import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginformserviceService } from 'src/app/loginformservice.service';
import { Package1 } from 'src/app/package';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  id!:number;
  packages!:Package1;
  constructor(private service:LoginformserviceService,private router:Router,
    private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.packages=new Package1();

    this.id=this.route.snapshot.params[`id`];

    this.service.getPackagebyid(this.id).subscribe(data => {
      console.log(data)
      this.packages = data;
    },error => console.log(error));
  }
  
  onSubmit(){
    
  }


}
