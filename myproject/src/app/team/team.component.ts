import { Component, OnInit } from '@angular/core';
import { Guide } from '../Guide';
import { LoginformserviceService } from '../loginformservice.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  guides!:Guide[];
  constructor(private packService:LoginformserviceService) { }

  ngOnInit(): void {
    this.getGuide();
  }
  private getGuide(){
    this.packService.getGuideDetails().subscribe(data => {this.guides=data});
  }

}
