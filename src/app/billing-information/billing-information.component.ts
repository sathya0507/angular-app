// billing-information.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IbillInfo } from '../models/billinfo';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss'],
})
export class BillingInformationComponent implements OnInit, OnDestroy {
  infoUser: IbillInfo = {
    firstName: '',
    lastName: '',
    address: '',
    addressLineTwo: '',
    state: '',
    district: '',
    postal: '',
    skills: {
      language: '',
      yearofexperience: 0,
    },
  };
  infoForm!: FormGroup;

  // states: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.infoForm = new FormGroup({
      firstName: new FormControl(this.infoUser.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      addressLineTwo: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      postal: new FormControl('', [Validators.required]),
      skills: new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
      ]),
    });
  }

  ngOnDestroy(): void {}

  formSubmit() {
    console.log(this.infoForm.value);
  }
}
