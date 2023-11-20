import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IsignUp } from '../models/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpUser: IsignUp;
  signUpForm!: FormGroup;
  constructor() {
    this.signUpUser = {} as IsignUp;
  }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(this.signUpUser.name, [
        Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(100),
      ]),

      email: new FormControl(this.signUpUser.email, [
        Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(100),
      ]),

      password: new FormControl(this.signUpUser.password, [
        Validators.required,
        Validators.minLength(8),
      ]),

      confirm: new FormControl(this.signUpUser.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  ngAfterViewInit() {}
  ngOnDestroy(): void {}
  formSubmit() {
    console.log(this.signUpForm.value);
  }
}
