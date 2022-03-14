import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guide } from 'src/app/Guide';
import { LoginformserviceService } from 'src/app/loginformservice.service';

@Component({
  selector: 'app-addguide',
  templateUrl: './addguide.component.html',
  styleUrls: ['./addguide.component.css']
})
export class AddguideComponent implements OnInit {

  guides:Guide =new Guide();
  constructor(private service:LoginformserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  saveGuide(){
    this.service.addGuide(this.guides).subscribe(data=>{
      console.log(data);
      this.router.navigate(['team']);
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.saveGuide();
  }

}
