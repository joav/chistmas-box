import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Box } from '../models/box';
import { BoxService } from '../services/box.service';

@Component({
	selector: 'app-wish',
	templateUrl: './wish.component.html',
	styleUrls: ['./wish.component.scss']
})
export class WishComponent implements OnInit {
	box:Box;
	form: FormGroup;
	validated = false;
	submiting = false;

	constructor(private boxService: BoxService, private router: Router) {
		this.form = new FormGroup({
			name: new FormControl('', [Validators.required]),
			wish: new FormControl('', [Validators.required])
		});
		const boxCode = location.href.split('?')[0].split('/').reverse()[0];
		boxService.getBox(boxCode)
			.subscribe(box => this.box = box);
	}

	get msg() {
		return this.box?'<p>'+this.box.msg.split('\n').join('</p><p>')+'</p>':'';
	}

	get name() { return this.form.get('name'); }

	get wish() { return this.form.get('wish'); }

	ngOnInit() {
	}

	onSubmit() {
		this.validated = true;
		if(this.form.valid){
			this.submiting = true;
			this.boxService.saveWish(this.box.id, {
				name: this.name.value,
				wish: this.wish.value,
				date: new Date()
			})
				.then(() => {
					this.boxService.lastBoxWish = this.box;
					this.router.navigate(['/deseo']);
				})
				.catch(e => e);
		}
	}

}
