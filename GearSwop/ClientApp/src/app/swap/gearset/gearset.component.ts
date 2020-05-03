import { Component, OnInit } from '@angular/core';
import {GearSetService} from '../../services/gear-set.service';
import {GearService} from '../../services/gear.service';

@Component({
  selector: 'app-gearset',
  templateUrl: './gearset.component.html',
  styleUrls: ['./gearset.component.scss']
})
export class GearsetComponent implements OnInit {
  slot: string
  slots = [
    'Main',
    'Sub',
    'Ranged',
    'Ammo',
    'Head',
    'Neck',
    'Ear1',
    'Ear2',
    'Body',
    'Hands',
    'Ring1',
    'Ring2',
    'Back',
    'Waist',
    'Legs',
    'Feet'
  ]
  private displayGearSelection = false;
  private setSaved = false;
  private gearImageUrls = {
    Main: "",
    Sub: "",
    Ammo: "",
    Head: "",
    Body: "",
    Hands: "",
    Legs: "",
    Feet: "",
    Neck: "",
    Waist: "",
    LeftEar: "",
    RightEar: "",
    LeftRing: "",
    RightRing: "",
    Back: "",
  }

  constructor(private gearService: GearService, private gearSetService: GearSetService) { }

  ngOnInit() {

  }

  selectGearItem(slot: string) {
    this.slot = slot;
    this.displayGearSelection = true;
  }

  itemSaved() {
    this.gearService.getSelectedItem().subscribe(x => {
      this.gearSetService.updateSet(this.slot, x.name);
      this.gearImageUrls[this.slot] = 'https://static.ffxiah.com/images/icon/'+ x.itemId +'.png';
    })
    this.displayGearSelection = false;
  }

  editSet() {
    this.setSaved = false;
  }
}
