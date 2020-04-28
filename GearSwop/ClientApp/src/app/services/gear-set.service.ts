import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IGearSet} from '../Interfaces/GearSet';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GearSetService {

  activeSet: IGearSet;

  constructor(private http: HttpClient) { }

  updateSet(formValue): Observable<boolean> {
    try{
      this.activeSet = formValue;
    } catch {
      return new Observable<false>();
    }
    return new Observable<true>();
  }

  get getActiveSet() {
    return this.activeSet;
  }

  postGearSet(set: IGearSet) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('/swap', set, httpOptions);
  }
}
