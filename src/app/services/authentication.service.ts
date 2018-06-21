import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  signUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.sendEmailVerification();
        console.log(response.uid);
        console.log(response);
        localStorage.setItem('uid', response.uid);
      })
      .catch(error => console.log(error));
  }
  login(user: User) {
    console.log(this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password));
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  
  logout() {
    return this.afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }
}
