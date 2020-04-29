import { Component, OnInit } from '@angular/core';
import {SwapService} from '../../services/swap.service';
import {GearSetService} from '../../services/gear-set.service';

@Component({
  selector: 'app-gearset',
  templateUrl: './gearset.component.html',
  styleUrls: ['./gearset.component.scss']
})
export class GearsetComponent implements OnInit {
  setName = "";
  slot: string;
  private displayGearSelection: boolean;

  constructor(private swapService: SwapService, private gearSetService: GearSetService) { }

  ngOnInit() { }

  updateSet($event) {
    this.gearSetService.updateSet(this.setName, $event.slot, $event.itemName)
    this.displayGearSelection = false;
  }

  selectGearItem(slot: string) {
    this.slot = slot;
    this.displayGearSelection = true;
  }
}
