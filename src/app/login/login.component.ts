import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IloginUser } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginUser: IloginUser;
  loginForm!: FormGroup;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  submit: boolean = false;

  constructor() {
    this.loginUser = {} as IloginUser;
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.loginUser.email, [
        Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(100),
      ]),
      password: new FormControl(this.loginUser.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  ngAfterViewInit() {}

  ngOnDestroy(): void {}

  formSubmit() {
    this.submit = true;
    console.log(this.loginForm.value);
  }
}
