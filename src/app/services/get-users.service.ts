import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../models/users';
import { switchMap, of, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  user!: IUsers[];
  url = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}
  getUser(): Observable<any> {
    return this.http.get<IUsers>(this.url).pipe(take(1));
    // pipe(
    //   switchMap((res) => {
    //     return of(res);
    //   })
    // );
  }
}
