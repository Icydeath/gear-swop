import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapService {
  public swap: ISwap;

  constructor(http: HttpClient) {
    http.get('')
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
