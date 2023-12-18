import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserFormData } from '../../models/userformdata';
import { GetUsersService } from 'src/app/services/get-users.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [ToastrService],
})
export class AddUserComponent implements OnInit, OnDestroy {
  userInfo: IUserFormData;
  userForm!: FormGroup;
  user!: IUserFormData;
  constructor(
    private fb: FormBuilder,
    private userservice: GetUsersService,
    private toastr: ToastrService
  ) {
    this.userInfo = {} as IUserFormData;
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      this.user = this.userForm.value;
      this.userservice.updateUser(this.user).subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success('User updated successfully', 'SUCCESS', {
            timeOut: 3000,
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      id: [this.userInfo.id, [Validators.required]],
      name: [this.userInfo.name, [Validators.required]],
      username: [this.userInfo.username, [Validators.required]],
      email: [this.userInfo.email, [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [this.userInfo.address?.street, [Validators.required]],
        suite: [this.userInfo.address?.suite, [Validators.required]],
        city: [this.userInfo.address?.city, [Validators.required]],
        zipcode: [this.userInfo.address?.zipcode, [Validators.required]],
        geo: this.fb.group({
          lat: [this.userInfo.address?.geo?.lat, [Validators.required]],
          lng: [this.userInfo.address?.geo?.lng, [Validators.required]],
        }),
      }),
      phone: [this.userInfo.phone, [Validators.required]],
      website: [this.userInfo.website, [Validators.required]],
      company: this.fb.group({
        name: [this.userInfo.company?.name, [Validators.required]],
        catchPhrase: [
          this.userInfo.company?.catchPhrase,
          [Validators.required],
        ],
        bs: [this.userInfo.company?.bs, [Validators.required]],
      }),
    });
  }
  checkMail() {
    this.toastr.info('Email Valid', 'Email Checked', {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'decreasing',
    });
  }
}
