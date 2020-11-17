import { Component, OnInit } from '@angular/core';
import { Box } from '../models/box';
import { Wish } from '../models/wish';
import { BoxService } from '../services/box.service';

@Component({
	selector: 'app-box',
	templateUrl: './box.component.html',
	styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
	box: Box = {
		name: '',
		title: '',
		msg: ''
	};
	wishes: Wish[] = [];

	constructor(private boxService: BoxService) {
		this.boxService.getOwnBox()
		.subscribe(box => this.box = box);
		this.boxService.getWishes()
		.subscribe(wishes => this.wishes = wishes);
	}

	ngOnInit() {
	}

}
