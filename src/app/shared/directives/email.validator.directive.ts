import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  Validator,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
})
export class EmailValidatorDirective {
  constructor() {}
}
