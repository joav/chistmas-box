import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Box } from '../models/box';
import { Wish } from '../models/wish';

@Injectable({
	providedIn: 'root'
})
export class BoxService {
	currentBoxCode: string = null;
	userLogged = false;
	isOwner = false;
	uid = '';
	lastBoxWish: Box;

	constructor(private db: AngularFirestore, private auth: AngularFireAuth) {
		this.currentBoxCode = localStorage.getItem('box');
		this.auth.onAuthStateChanged(user => {
			this.userLogged = Boolean(user);
			if(user && this.currentBoxCode) this.isOwner = user.email.includes(this.currentBoxCode);
			else this.isOwner = false;
			if(user) this.uid = user.uid;
		});
	}

	createBox(box: Box) {
		const code = this.generateUID();
		box.code = code;
		return new Observable<string>(subs => {
			this.auth
				.createUserWithEmailAndPassword(`${code}@christmas-box.web.app`, box.password)
				.then(u => {
					this.auth.signInWithEmailAndPassword(`${code}@christmas-box.web.app`, box.password)
						.then(authU => {
							this.db.doc(`boxes/${u.user.uid}`).set(box, { merge: true })
								.then(() => {
									subs.next(code);
									subs.complete();
								})
								.catch(e => subs.error(e));
						})
						.catch(e => subs.error(e));
				})
				.catch(e => subs.error(e));
		});
	}

	saveBoxCode(code: string) {
		this.currentBoxCode = code;
		localStorage.setItem('box', code);
	}

	getBox(code: string) {
		return this.db.collection<Box>('boxes', ref => ref.where('code', '==', code).limit(1)).get()
		.pipe(
			map(resp => {
				return resp.docs.length?{...resp.docs[0].data(), id: resp.docs[0].id} as Box:null;
			})
		);
	}

	getOwnBox() {
		return this.db.collection<Box>('boxes').doc(this.uid).get()
		.pipe(
			map(doc => {
				return doc.exists?doc.data() as Box:null;
			})
		);
	}

	getWishes() {
		return this.db.doc(`boxes/${this.uid}`).collection<Wish>('wishes', ref => ref.orderBy('date', 'desc'))
		.valueChanges();
	}

	generateUID() {
		// I generate the UID from two parts here
		// to ensure the random number provide enough bits.
		const firstPart = (Math.random() * 46656) | 0;
		const secondPart = (Math.random() * 46656) | 0;
		return ("000" + firstPart.toString(36)).slice(-3) + ("000" + secondPart.toString(36)).slice(-3);
	}

	saveWish(uid: string, wish: Wish) {
		return this.db.doc(`boxes/${uid}`).collection<Wish>('wishes').add(wish);
	}

	accessToBox(code: string, password: string) {
		return this.auth.signInWithEmailAndPassword(`${code}@christmas-box.web.app`, password);
	}
}
