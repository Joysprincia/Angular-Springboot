import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginformserviceService } from 'src/app/loginformservice.service';
import { Package1 } from 'src/app/package';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {

  packages: Package1=new Package1();
  constructor(private service:LoginformserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  savePackage(){
    this.service.addPackage(this.packages).subscribe(data=>{
      console.log(data);
      this.gotoPackageList();
    },
    error=>console.log(error));
  }

  gotoPackageList(){
      this.router.navigate(['package']);
  }

  onSubmit(){
    this.savePackage();
  }

}
