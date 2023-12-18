import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateDistrictService {
  private stateUrl = 'http://localhost:3000/states';
  private districtUrl = 'http://localhost:3000/districts';

  constructor(private http: HttpClient) {}

  getStates(): Observable<any[]> {
    return this.http.get<any[]>(this.stateUrl);
  }

  getDistricts(stateId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.districtUrl}/${stateId}`);
    // Use backticks (`) for string interpolation
  }
}
