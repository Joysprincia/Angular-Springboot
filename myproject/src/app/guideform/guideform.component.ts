import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guide } from '../Guide';
import { LoginformserviceService } from '../loginformservice.service';

@Component({
  selector: 'app-guideform',
  templateUrl: './guideform.component.html',
  styleUrls: ['./guideform.component.css']
})
export class GuideformComponent implements OnInit {

  id!:number;
  guides!:Guide;
  constructor(private service:LoginformserviceService,private router:Router,
    private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.guides=new Guide();

    this.id=this.route.snapshot.params[`id`];

    this.service.getGuidebyid(this.id).subscribe(data => {
      console.log(data)
      this.guides = data;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.service.updateGuide(this.id,this.guides).subscribe(data =>{
    },error => console.log(error));
  }

}
