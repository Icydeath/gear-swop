import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IGearItem} from '../Interfaces/GearItem';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {IItemMap} from '../Interfaces/ItemMap';
import {IGearSet} from '../Interfaces/GearSet';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  private currentSelectedItem = new BehaviorSubject<IGearItem>(null);

  private itemMap;

  constructor(private http: HttpClient) {
    this.GetItemMap().subscribe(x => this.itemMap = x);
  }

  updateSelectedItem(itemName) {
    let itemId = this.translateItemId(itemName);
    this.GetGearInfoById(itemId).subscribe(x => this.currentSelectedItem.next(x));
  }

  getSelectedItem() {
    return this.currentSelectedItem.asObservable();
  }

  translateItemId(itemName) {
    let lowercaseItemName = itemName.toLowerCase();
    return this.itemMap.find(x => x.itemLongName.toLowerCase() == lowercaseItemName).itemId;
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

  GetItemMap(): Observable<IItemMap[]> {
    const url = `itemMap`;

    return this.http.get(url)
      .pipe(
        map(res => {
          return res as IItemMap[];
        })
      );
  }
}
