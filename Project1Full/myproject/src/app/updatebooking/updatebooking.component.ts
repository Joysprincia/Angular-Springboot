import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../Booking';
import { Guide } from '../Guide';
import { LoginformserviceService } from '../loginformservice.service';

@Component({
  selector: 'app-updatebooking',
  templateUrl: './updatebooking.component.html',
  styleUrls: ['./updatebooking.component.css']
})
export class UpdatebookingComponent implements OnInit {

  book_id!:number;
  books!:Booking;
  constructor(private service:LoginformserviceService,private router:Router,
    private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.books=new Booking();

    this.book_id=this.route.snapshot.params[`book_id`];

    this.service.getBookingbyid(this.book_id).subscribe(data => {
      console.log(data)
      this.books = data;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.service.updateBooking(this.book_id,this.books).subscribe(data =>{
      this.gotoBookingList();
    },error => console.log(error));
  }
  gotoBookingList(){
    this.router.navigate(['admin']);
}

}
