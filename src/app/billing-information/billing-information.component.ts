import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IbillInfo } from '../models/billinfo';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss'],
})
export class BillingInformationComponent implements OnInit, OnDestroy {
  infoUser: IbillInfo;
  infoForm!: FormGroup;
  constructor() {
    this.infoUser = {} as IbillInfo;
  }
  ngOnInit(): void {
    this.infoForm = new FormGroup({
      firstName: new FormControl(this.infoUser.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl(this.infoUser.lastName, [Validators.required]),
      address: new FormControl(this.infoUser.address, [Validators.required]),
      addressLineTwo: new FormControl(this.infoUser.addressLineTwo, [
        Validators.required,
      ]),
      city: new FormControl(this.infoUser.city, [Validators.required]),
      country: new FormControl(this.infoUser.country, [Validators.required]),
      state: new FormControl(this.infoUser.state, [Validators.required]),
      postal: new FormControl(this.infoUser.postal, [Validators.required]),
    });
  }
  ngAfterViewInit() {}
  ngOnDestroy(): void {}
  formSubmit() {
    console.log(this.infoForm.value);
  }
}
