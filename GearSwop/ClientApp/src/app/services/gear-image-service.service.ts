import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GearImageServiceService {

  testImages = {
    KrakenClub: 'https://static.ffxiah.com/images/icon/17440.png',
    Daybreak: 'https://static.ffxiah.com/images/icon/22040.png',
    Nirvana: 'https://static.ffxiah.com/images/icon/18985.png'};

  constructor() { }

  getItemImage(itemName: string) {
    const strippedItemName = itemName.replace(/\s/g, "");
    console.log(this.testImages[strippedItemName])
    return this.testImages[strippedItemName];
  }
}
