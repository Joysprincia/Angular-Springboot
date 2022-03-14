import { Component, OnInit } from '@angular/core';
import { Images } from '../images';
import { LoginformserviceService } from '../loginformservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images!:Images[];
  constructor(private packService:LoginformserviceService) { }
  
  ngOnInit(): void {
    this.getImages();
  }
  private getImages(){
    this.packService.getImagesDetails().subscribe(data => {this.images=data});
  }

}
