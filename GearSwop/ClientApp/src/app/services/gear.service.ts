import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IGearItem} from '../Interfaces/GearItem';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {IItemMap} from '../Interfaces/ItemMap';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  private currentSelectedItem = new BehaviorSubject<IGearItem>(null);
  private itemMap;


  testImages = {
    KrakenClub: 'https://static.ffxiah.com/images/icon/17440.png',
    Daybreak: 'https://static.ffxiah.com/images/icon/22040.png',
    Nirvana: 'https://static.ffxiah.com/images/icon/18985.png'};

  constructor(private http: HttpClient) {
    this.GetItemMap().subscribe(x => this.itemMap = x);
  }

  updateSelectedItem(itemName) {
    this.GetGearInfoByName(itemName).subscribe(x => this.currentSelectedItem.next(x));
  }

  getSelectedItem() {
    return this.currentSelectedItem.asObservable();
  }

  getItemImage(itemName: string) {
    const strippedItemName = itemName.replace(/\s/g, "");
    return this.testImages[strippedItemName];
  }

  GetGearInfoById(itemId): Observable<IGearItem> {
    const url = `gearInfo/${itemId}`;

    return this.http.get(url)
      .pipe(
        map(res => {
          return res as IGearItem;
        })
      );
  }

  GetGearInfoByName(itemName): Observable<IGearItem> {
    const url = `gearInfo/${itemName}`;

    return this.http.get(url)
      .pipe(
        map(res => {
          return res as IGearItem;
        })
      );
  }

  GetItemMap(): Observable<IItemMap> {
    const url = `itemMap`;

    return this.http.get(url)
      .pipe(
        map(res => {
          return res as IItemMap;
        })
      );
  }
}
