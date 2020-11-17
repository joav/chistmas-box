import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor(private db: AngularFirestore, private auth: AngularFireAuth) { }

  createBox(box: Box){
      const code = this.generateUID();
      box.code = code;
      return new Observable(subs => {
        this.auth
        .createUserWithEmailAndPassword(`${code}@christmas-box.web.app`, box.password)
        .then(u => {
            this.auth.signInWithEmailAndPassword(`${code}@christmas-box.web.app`, box.password)
            .then(authU => {
                this.db.doc(`boxes/${u.user.uid}`).set(box, {merge: true})
                .subscribe(() => {
                   subs.complete(); 
                }, e => subs.error(e));
            })
            .catch(e => subs.error(e));
        })
        .catch(e => subs.error(e));
      });
  }
  
  getBox(code: string) {
      return this.db.collection('boxes', ref => ref.where('code', '==', code).limit(1)).get();
  }

  generateUID() {
    // I generate the UID from two parts here
    // to ensure the random number provide enough bits.
    const firstPart = (Math.random() * 46656) | 0;
    const secondPart = (Math.random() * 46656) | 0;
    return ("000" + firstPart.toString(36)).slice(-3) + ("000" + secondPart.toString(36)).slice(-3);
  }
}
