import { Component, OnInit } from '@angular/core';
import {IGearItem} from '../../Interfaces/GearItem';
import {GearInfoService} from '../../services/gear-info.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  itemId = 22063;
  displayedItem: IGearItem;

  constructor(private gearInfoService: GearInfoService) { }

  ngOnInit() {
    this.gearInfoService.getGearInfo(this.itemId).subscribe(x => {
      this.displayedItem = x;
    });
  }
}
