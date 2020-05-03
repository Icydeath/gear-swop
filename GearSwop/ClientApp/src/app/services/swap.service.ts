import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapService {

  private characterName = new BehaviorSubject<string>(null);
  private characterJob = new BehaviorSubject<string>(null);

  constructor() {  }

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
}

