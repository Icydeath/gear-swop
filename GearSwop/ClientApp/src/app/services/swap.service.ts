import { Injectable } from '@angular/core';
import {BehaviorSubject, throwError} from 'rxjs';
import {IGearSet} from '../Interfaces/GearSet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapService {

  private characterName = new BehaviorSubject<string>(null);
  private characterJob = new BehaviorSubject<string>(null);

  private Swap: Array<IGearSet> = [];

  constructor(private http: HttpClient) {  }

  setNameJob(jobName) {
    this.characterName.next(jobName.characterName);
    this.characterJob.next(jobName.job);
  }

  getCharacterJob() {
    return this.characterJob.asObservable();
  }

  getCharacterName() {
    return this.characterName.asObservable();
  }

  addSetToSwap(set: IGearSet) {
    console.log(set);
    this.Swap.push(set);
  }

  postSwap() {
    let swapJson = JSON.stringify(this.Swap);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('/swap', swapJson, httpOptions)
      .pipe(
        catchError(this.handleErrorObservable)
      );
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error.message || error);
  }
}

