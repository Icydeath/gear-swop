import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IGearItem} from '../Interfaces/GearItem';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GearInfoService {

  constructor(private http: HttpClient) { }

  getGearInfo(itemId): Observable<IGearItem> {
    const url = `gearInfo/${itemId}`;

    return this.http.get(url)
      .pipe(
        map(res => {
          return res as IGearItem;
        })
      );
    }
}
