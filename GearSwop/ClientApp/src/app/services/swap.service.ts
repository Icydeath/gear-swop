import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IGearSet} from '../Interfaces/GearSet';

@Injectable({
  providedIn: 'root'
})
export class SwapService {

  constructor(private http: HttpClient) {

  }

  /*getSwap(): Observable<ISwap> {
    return this.http.get('/swap')
      .pipe(
        map(res =>{
          return res as ISwap
        })
      );
  }*/

  postSwap(set: IGearSet) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    const json = JSON.stringify(set);

    return this.http.post('/swap', json, httpOptions);
  }
}

