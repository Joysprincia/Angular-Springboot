import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginformserviceService } from '../loginformservice.service';
import { Package1 } from '../package';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

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
      this.router.navigate(['/package']);
  }

  onSubmit(){
    this.savePackage();
  }
}
