import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;
  public url: any ;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
    const uid = localStorage.getItem('uid');
    const url = uid + '/uploads'
      console.log(db.list(url));
  }

  getImages(): Observable<GalleryImage[]> {
    const uid = localStorage.getItem('uid');
    const url = uid + '/uploads'
    return this.db.list(url);
  }

  getImage(key: string) {
    const uid = localStorage.getItem('uid');
    const url = uid + '/uploads/'
    return firebase.database().ref(url + key).once('value')
    .then((snap) => snap.val());
  }
}
