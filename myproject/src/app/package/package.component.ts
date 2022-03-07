import { Component, OnInit } from '@angular/core';
import { LoginformserviceService } from '../loginformservice.service';
import { Package1 } from '../package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packages!:Package1[];
  constructor(private packService:LoginformserviceService) { }

  ngOnInit(): void {
    this.getPackage();
  }
  private getPackage(){
    this.packService.getPackageDetails().subscribe(data => {this.packages=data});
  }

}
