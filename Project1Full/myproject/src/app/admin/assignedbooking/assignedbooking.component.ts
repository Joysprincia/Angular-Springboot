import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignGuide } from 'src/app/AssignGuide';
import { LoginformserviceService } from 'src/app/loginformservice.service';

@Component({
  selector: 'app-assignedbooking',
  templateUrl: './assignedbooking.component.html',
  styleUrls: ['./assignedbooking.component.css']
})
export class AssignedbookingComponent implements OnInit {

  assignguides!:AssignGuide[];
  constructor(private packService:LoginformserviceService, private router:Router) { }

  ngOnInit() {
    this.getAssignedList();
  }
  private getAssignedList(){
    this.packService.getAllAssigned().subscribe(data => {
      this.assignguides=data;    
    });
  }
  
  updateAssigned(ag_id : number){
    this.router.navigate(['updateassigned',ag_id]);
  }

  deleteAssigned(ag_id: number){
    if(confirm("Are you sure do you want to delete this package detail?")) {
    this.packService.deleteAssignedGuide(ag_id).subscribe(data =>{
      console.log(data);
      this.getAssignedList();
    })
    }
  }

}
