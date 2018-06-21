import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  private imageUrl = '';
  private basePath = '/uploads';
  constructor(private imageService: ImageService,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router) { }

  getImageUrl(key: string) {
    this.imageService.getImage(key)
      .then(image =>
        {
          console.log(image.url);
          this.imageUrl = image.url;
        });
  }
  delete(key) {
    const uid = localStorage.getItem('uid');
    const url = uid + '/uploads'
    console.log(this.route.snapshot.params['id']);
    this.db.list(`${uid}/${this.basePath}/`).remove(key || this.route.snapshot.params['id']);
    this.router.navigateByUrl('/gallery');
  }
  downLoad(url) {
    // console.log(url);
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');
    // var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function () {
    //   var a = document.createElement('a');
    //   a.href = window.URL.createObjectURL(xhr.response);
    //   a.download = "fileDownloaded.jpg"; // Name the file anything you'd like.
    //   a.style.display = 'none';
    //   document.body.appendChild(a);
    //   a.click();
    // };
    // xhr.open('GET', url);
    // xhr.send();
  }
  ngOnInit() {
    setTimeout(() => {
      console.log(this.imageUrl);
    }, 1000);
    console.log(this.route.snapshot.params['id']);
    this.getImageUrl(this.route.snapshot.params['id']);
  }
}
