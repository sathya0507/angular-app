import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  title = 'angular-property-binding-example';
  firstName = 'jhon';
  lastName = 'Doe';
  isDisabled = true;
  name = 'jhon doe';
  onClick() {
    // alert('im clicked');
    this.title =
      'im been clicked this is one-way binding from view to component';
  }
  clearName() {
    this.name = '';
  }
}
