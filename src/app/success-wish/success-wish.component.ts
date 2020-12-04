import { Component, OnInit } from '@angular/core';
import { Box } from '../models/box';
import { BoxService } from '../services/box.service';

@Component({
	selector: 'app-success-wish',
	templateUrl: './success-wish.component.html',
	styleUrls: ['./success-wish.component.scss']
})
export class SuccessWishComponent implements OnInit {
	box: Box;

	constructor(private boxService: BoxService) {
		this.box = boxService.lastBoxWish;
	}

	get owner() { return this.boxService.isOwner; }

	ngOnInit() {
	}

	copy(input:HTMLInputElement) {
		input.select();
		input.setSelectionRange(0, 999999);
		document.execCommand("copy");
	}

	share() {
		if(navigator.share){
			navigator.share({
				url: `https://christmas-box.web.app/${this.box.code}`,
				text: 'Pide tus deseos de navidad.',
				title: 'Deseos de navidad'
			})
			.catch(e => console.log(e));
		}
	}

}
