import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BoxService } from '../service/box.service';

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.scss']
})
export class CreateBoxComponent implements OnInit {
    form: FormGroup;

    constructor(private boxService: BoxService, private router: Router) {
        this.form = new FormGroup({
            title: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            msg: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    get title() { return this.form.get('title'); }
    get name() { return this.form.get('name'); }
    get msg() { return this.form.get('msg'); }
    get password() { return this.form.get('password'); }
    
    ngOnInit() {
    }

    onSubmit() {
        if(this.form.valid){
            this.boxService(this.form.value)
            .then(code => {
                this.router.navigate([`/exito-creacion`]);
            }, e => e);
        }
    }

}
