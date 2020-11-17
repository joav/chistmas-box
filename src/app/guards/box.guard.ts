import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoxService } from '../services/box.service';

@Injectable({
	providedIn: 'root'
})
export class BoxGuard implements CanActivate {
	constructor(private boxService: BoxService, private router: Router) { }
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const resp = Boolean(this.boxService.currentBoxCode);
		if(!resp){
			this.router.navigate(['/']);
		}
		return resp;
	}

}
