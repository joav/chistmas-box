import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoxService } from '../services/box.service';

@Component({
	selector: 'app-access-box',
	templateUrl: './access-box.component.html',
	styleUrls: ['./access-box.component.scss']
})
export class AccessBoxComponent implements OnInit {
	form: FormGroup;
	validated = false;
	submiting = false;
	error = false;

	constructor(private boxService: BoxService, private router: Router) {
		this.form = new FormGroup({
			code: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required])
		});
	}

	get code() { return this.form.get('code'); }
	get password() { return this.form.get('password'); }

	ngOnInit() {
	}

	onSubmit() {
		this.validated = true;
		if(this.form.valid){
			this.submiting = true;
			this.boxService.accessToBox(this.code.value, this.password.value)
				.then(u => {
					this.boxService.saveBoxCode(this.code.value);
					this.router.navigate([`/buzon/${this.code.value}`]);
				})
				.catch(e => {
					console.log(e);
					this.error = true;
				});
		}
	}

}
