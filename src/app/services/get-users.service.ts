import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../models/users';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IUserFormData } from '../models/userformdata';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  user!: IUsers[];
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getUser(): Observable<any> {
    return this.http.get<IUsers>(this.url).pipe(take(1));
  }
  updateUser(param: IUserFormData): Observable<any> {
    return this.http.post<IUserFormData>(this.url, param);
  }
  // deleteUser(param: IUserFormData): Observable<any> {
  //   return this.http.delete<IUserFormData>(this.url, param);
  // }
}
