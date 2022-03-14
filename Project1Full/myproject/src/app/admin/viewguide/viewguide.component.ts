import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guide } from 'src/app/Guide';
import { LoginformserviceService } from 'src/app/loginformservice.service';

@Component({
  selector: 'app-viewguide',
  templateUrl: './viewguide.component.html',
  styleUrls: ['./viewguide.component.css']
})
export class ViewguideComponent implements OnInit {

  guides!:Guide[];
  constructor(private service:LoginformserviceService, private router:Router) { }

  ngOnInit(): void {
    this.getGuide();
  }

  private getGuide(){
    this.service.getGuideDetails().subscribe(data => {
      this.guides=data;    
    });
  }
  
  updateGuide(id : number){
    this.router.navigate(['guideform',id]);
  }

  deleteGuide(id: number){
    if(confirm("Are you sure do you want to delete this package detail?")) {
    this.service.deletePackage(id).subscribe(data =>{
      console.log(data);
      this.getGuide();
    })
    }
  }

}
