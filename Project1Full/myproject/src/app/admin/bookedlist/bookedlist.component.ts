import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Booking';
import { LoginformserviceService } from 'src/app/loginformservice.service';

@Component({
  selector: 'app-bookedlist',
  templateUrl: './bookedlist.component.html',
  styleUrls: ['./bookedlist.component.css']
})
export class BookedlistComponent implements OnInit {

  books!:Booking[];
  constructor(private packService:LoginformserviceService, private router:Router) { }

  ngOnInit() {
    this.getBookedList();
  }
  private getBookedList(){
    this.packService.getAllBookings().subscribe(data => {
      this.books=data;    
    });
  }
  
  updateBooking(id : number){
    this.router.navigate(['updatebooking',id]);
  }

  deleteBooking(id: number){
    if(confirm("Are you sure do you want to delete this package detail?")) {
    this.packService.deleteBooking(id).subscribe(data =>{
      console.log(data);
      this.getBookedList();
    })
    }
  }

}
