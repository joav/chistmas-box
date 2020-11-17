import { Component, OnInit } from '@angular/core';
import { BoxService } from '../services/box.service';

@Component({
	selector: 'app-success-create',
	templateUrl: './success-create.component.html',
	styleUrls: ['./success-create.component.scss']
})
export class SuccessCreateComponent implements OnInit {

	constructor(public boxService: BoxService) { }

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
				url: `https://christmas-box.web.app/${this.boxService.currentBoxCode}`,
				text: 'Pide tus deseos de navidad.',
				title: 'Deseos de navidad'
			})
			.catch(e => console.log(e));
		}
	}

}
