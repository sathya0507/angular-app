import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
