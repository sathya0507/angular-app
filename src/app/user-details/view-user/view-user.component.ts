import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  users: any[] = [];
  loading = false;
  error: string | null = null;

  displayedColumns: string[] = [
    'name',
    'email',
    'username',
    'phone',
    'street',
    'city',
    'zipcode',
    'latitude',
    'longitude',
    'companyName',
    'catchPhrase',
    'website',
    'bs',
  ];

  constructor(private userservice: GetUsersService) {}

  ngOnInit(): void {
    this.userservice.getUser().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
    });
  }
}
