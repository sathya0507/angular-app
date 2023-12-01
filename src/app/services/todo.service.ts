import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}
  getTodo(): Observable<any> {
    return this.http.get(this.url);
  }
}
