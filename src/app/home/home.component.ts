import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxService } from '../services/box.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	owner = false;

	constructor(private boxService: BoxService, private router: Router) {}

	ngOnInit() {
	}

	access(){
		if(this.boxService.isOwner){
			this.router.navigate([`/buzon/${this.boxService.currentBoxCode}`]);
		}else{
			this.router.navigate(['/acceder']);
		}
	}

}
