import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignGuide } from 'src/app/AssignGuide';
import { Booking } from 'src/app/Booking';
import { Guide } from 'src/app/Guide';
import { LoginformserviceService } from 'src/app/loginformservice.service';

@Component({
  selector: 'app-assignguide',
  templateUrl: './assignguide.component.html',
  styleUrls: ['./assignguide.component.css']
})
export class AssignguideComponent implements OnInit {

  guides!:Guide[];
  guides1: Guide=new Guide();
  books!:Booking[];
  assignguides: AssignGuide=new AssignGuide();
  values!:any;
  constructor(private service:LoginformserviceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.getBookings();
    this.getGuide();
  }
  private getBookings(){
    this.service.getBookings().subscribe(data => {
      this.books=data;    
    });
  }
  
  updateBooking(book_id : number){
    console.log(book_id);
    this.router.navigate(['updatebooking',book_id]);
  }

  deleteBooking(book_id: number){
    if(confirm("Are you sure do you want to delete this package detail?")) {
    this.service.deleteBooking(book_id).subscribe(data =>{
      console.log(data);

      this.getBookings();
    })
    }
  }

  private getGuide(){
    this.service.getGuideDetails().subscribe(data => {
      this.guides=data;    
    });
  }
  
  updateGuide(id : number){
    this.router.navigate(['guideform',id]);
  }

  g_id!:string;
  saveAssignGuide(){
    this.service.addAssignGuide(this.assignguides).subscribe(data=>{
      console.log(data);
      this.values=data;
      console.log(this.values);
      this.g_id=this.values.map((st: { g_id: any; })=>st.g_id);
      console.log(this.g_id);
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.saveAssignGuide();
  }

  
  updateGuideStatus(g_id:string){
    this.service.updateGuideStatus(this.g_id,this.guides1).subscribe(data=>{
      console.log(data);
      
    },
    error=>console.log(error));
  }

}
