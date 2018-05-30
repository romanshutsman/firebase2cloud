import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import { ImageDetailComponent } from "./../image-detail/image-detail.component";
import * as firebase from 'firebase';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>;
  countImg = 0;
  img: any = [];
  emailVerify = false;

  constructor(private imageService: ImageService, private ImageDetailComponent: ImageDetailComponent) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    console.log(this.images);
    this.images.forEach(element => {
      console.log(element.length);
      this.countImg = element.length
      this.img.push(element);
    });
    console.log(this.img.length);
    this.emailVerify = firebase.auth().currentUser.emailVerified; 
    console.log(firebase.auth().currentUser.emailVerified);
    
  }
  SendVerification() {
    firebase.auth().currentUser.sendEmailVerification();
  }
  delete(key) {
    console.log(key);
    this.ImageDetailComponent.delete(key);  
  }
  down(url) {
  console.log(url);
    this.ImageDetailComponent.downLoad(url);
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}
