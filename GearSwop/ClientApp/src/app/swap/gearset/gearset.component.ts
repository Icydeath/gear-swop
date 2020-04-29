import { Component, OnInit } from '@angular/core';
import {SwapService} from '../../services/swap.service';
import {GearSetService} from '../../services/gear-set.service';

@Component({
  selector: 'app-gearset',
  templateUrl: './gearset.component.html',
  styleUrls: ['./gearset.component.scss']
})
export class GearsetComponent implements OnInit {
  slot = "Main";
  private displayGearSelection: boolean;

  constructor(private swapService: SwapService, private gearSetService: GearSetService) { }

  ngOnInit() { }

  updateItem($event) {
    this.gearSetService.updateSingleItem($event.slot, $event.itemName)
    this.displayGearSelection = false;
  }

  selectGearItem(slot: string) {
    this.slot = slot;
    this.displayGearSelection = true;
  }
}
