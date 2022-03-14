import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignGuide } from '../AssignGuide';
import { LoginformserviceService } from '../loginformservice.service';

@Component({
  selector: 'app-updateassigned',
  templateUrl: './updateassigned.component.html',
  styleUrls: ['./updateassigned.component.css']
})
export class UpdateassignedComponent implements OnInit {

  ag_id!:number;
  assignguides!:AssignGuide;
  constructor(private service:LoginformserviceService,private router:Router,
    private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.assignguides=new AssignGuide();

    this.ag_id=this.route.snapshot.params[`ag_id`];

    this.service.getAssignedbyid(this.ag_id).subscribe(data => {
      console.log(data)
      this.assignguides = data;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.service.updateAssignGuide(this.ag_id,this.assignguides).subscribe(data =>{
      this.gotoadmin();
    },error => console.log(error));
  }
  gotoadmin(){
    this.router.navigate(['admin']);
}

}
