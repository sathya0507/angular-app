import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetUsersService } from '../../../services/get-users.service';
import { IUsers } from '../../../models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  user!: IUsers;
  constructor(private userDetails: GetUsersService) {}
  ngOnInit(): void {
    this.userDetails.getUser().subscribe({
      next: (data: any) => {
        this.user = data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  ngOnDestroy(): void {}
}
