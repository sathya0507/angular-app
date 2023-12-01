import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        this.error = 'Error fetching user data.';
      }
    );
  }
}