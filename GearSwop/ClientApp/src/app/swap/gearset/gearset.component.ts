import { Component, OnInit } from '@angular/core';
import {SwapService} from '../../services/swap.service';
import {GearSetService} from '../../services/gear-set.service';
import {IGearSet} from '../../Interfaces/GearSet';
import {IGearItem} from '../../Interfaces/GearItem';

@Component({
  selector: 'app-gearset',
  templateUrl: './gearset.component.html',
  styleUrls: ['./gearset.component.scss']
})
export class GearsetComponent implements OnInit {
  slot: string
  gearSet: IGearSet = new class implements IGearSet {
    SetName: string;
    Ammo: IGearItem;
    Back: IGearItem;
    Body: IGearItem;
    Feet: IGearItem;
    Hands: IGearItem;
    Head: IGearItem;
    LeftEar: IGearItem;
    LeftRing: IGearItem;
    Legs: IGearItem;
    Main: IGearItem;
    Neck: IGearItem;
    RightEar: IGearItem;
    RightRing: IGearItem;
    Sub: IGearItem;
    Waist: IGearItem;
  };
  private displayGearSelection = false;
  private setSaved = false;

  constructor(private swapService: SwapService, private gearSetService: GearSetService) { }

  ngOnInit() {
  }

  updateSet($event) {
    this.gearSet[$event.slot] = $event.itemName;
    this.displayGearSelection = false;
    this.setSaved = false;
  }

  selectGearItem(slot: string) {
    this.slot = slot;
    this.displayGearSelection = true;
  }

  itemSaved() {
    this.displayGearSelection = false;
  }

  saveFullSet() {

  }

  editSet() {
    this.setSaved = false;
  }

  getImageUrl(slot) {
    let itemId = this.gearSetService.getActiveSetItemId(slot);
    if(!itemId){
      return
    }
    return 'https://static.ffxiah.com/images/icon/'+ itemId +'.png';
  }

  setCheck() {
    console.log(this.gearSetService.getActiveSet);
  }

  onImgError(event) {
    event.target.src = 'assets/';
  }
}
