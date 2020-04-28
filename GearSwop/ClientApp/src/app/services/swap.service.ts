import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapService {

  constructor(private http: HttpClient) {

  }

  getSwap(): Observable<ISwap> {
    return this.http.get('/swap')
      .pipe(
        map(res =>{
          return res as ISwap
        })
      );
  }
}

interface ISwap {
  characterName: string;
  job: string;
}
