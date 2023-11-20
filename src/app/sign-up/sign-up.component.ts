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
  emailRgex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // emailRegex = new RegExp(
  //   /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  //   'gm'
  // );
  constructor() {
    this.signUpUser = {} as IsignUp;
  }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(this.signUpUser.name, [Validators.required]),

      email: new FormControl(this.signUpUser.email, [
        Validators.required,
        Validators.pattern(this.emailRgex),
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
