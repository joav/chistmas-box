import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoxService } from '../services/box.service';

@Injectable({
	providedIn: 'root'
})
export class BoxOwnerGuard implements CanActivate {
	constructor(private auth: AngularFireAuth, private boxService: BoxService, private router: Router){ }
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return new Promise((resolve) => {
			this.auth.onAuthStateChanged(user => {
				if(user && this.boxService.currentBoxCode && user.email.includes(this.boxService.currentBoxCode)){
					resolve(true);
				}else{
					this.router.navigate(['/acceder']);
					resolve(false);
				}
			})
			.then(u => {
				u();
			});
		});
	}

}
