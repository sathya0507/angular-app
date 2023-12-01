import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
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
    this.signUpForm = new FormGroup(
      {
        name: new FormControl(this.signUpUser.name, [Validators.required]),
        email: new FormControl(this.signUpUser.email, [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl(this.signUpUser.password, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirm: new FormControl(this.signUpUser.confirm, [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnDestroy(): void {}

  formSubmit() {
    if (this.signUpForm.valid) {
      // Perform actions only if the form is valid
      console.log('Form submitted with valid data:', this.signUpForm.value);
    } else {
      console.log('Form is not valid. Please check for errors.');
    }
  }

  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const passwordControl = formGroup.get('password');
    const confirmControl = formGroup.get('confirm');

    if (!passwordControl || !confirmControl) {
      return null;
    }

    if (passwordControl.value !== confirmControl.value) {
      confirmControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmControl.setErrors(null);
      return null;
    }
  }
}
