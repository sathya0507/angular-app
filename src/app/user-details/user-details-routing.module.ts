// userDetails-routing.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule, ToastrService } from 'ngx-toastr';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,

    children: [
      { path: '', redirectTo: 'view-user', pathMatch: 'full' },
      { path: 'add-user', component: AddUserComponent },
      { path: 'view-user', component: ViewUserComponent },
    ],
  },
];

@NgModule({
  declarations: [UserDetailsComponent, AddUserComponent, ViewUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
})
export class UserDetailsRoutingModule {}
