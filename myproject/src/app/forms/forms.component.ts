import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginformserviceService } from '../loginformservice.service';
import { Package1 } from '../package';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  id!:number;
  packages!:Package1;
  constructor(private service:LoginformserviceService,private router:Router,
    private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.packages=new Package1();

    this.id=this.route.snapshot.params[`id`];

    this.service.getPackagebyid(this.id).subscribe(data => {
      console.log(data)
      this.packages = data;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.service.updatePackage(this.id,this.packages).subscribe(data =>{
      this.gotoPackageList();
    },error => console.log(error));
  }
  gotoPackageList(){
    this.router.navigate(['package']);
}

}
