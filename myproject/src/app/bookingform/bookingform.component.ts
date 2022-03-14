import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../Booking';
import { LoginformserviceService } from '../loginformservice.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  id!: number;
  books: Booking =new Booking();
  constructor(private service:LoginformserviceService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.service.getId();
  }

  saveBook(){
    this.service.addBooking(this.books).subscribe(data=>{
      console.log(data);
      this.router.navigate(['success']);
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.saveBook();
  }

}
