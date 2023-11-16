import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loading = true;
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
  ngAfterViewInit() {
    // this.loading = false;
  }
  ngOnDestroy(): void {}
}
