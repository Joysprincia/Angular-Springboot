import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginformserviceService } from 'src/app/loginformservice.service';
import { Package1 } from 'src/app/package';

@Component({
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.css']
})
export class ViewpackageComponent implements OnInit {

  packages!:Package1[];
  constructor(private packService:LoginformserviceService, private router:Router) { }

  ngOnInit() {
    this.getPackage();
  }
  private getPackage(){
    this.packService.getPackageDetails().subscribe(data => {
      this.packages=data;    
    });
  }
  
  updatePackage(id : number){
    this.router.navigate(['forms',id]);
  }

  deletePackage(id: number){
    if(confirm("Are you sure do you want to delete this package detail?")) {
    this.packService.deletePackage(id).subscribe(data =>{
      console.log(data);
      this.getPackage();
    })
    }
  }
}
