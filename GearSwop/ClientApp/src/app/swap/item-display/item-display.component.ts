import { Component, OnInit } from '@angular/core';
import {IGearItem} from '../../Interfaces/GearItem';
import {GearService} from '../../services/gear.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  displayedItem: IGearItem;
  displayedItemImageURL: string;

  constructor(private gearService: GearService) { }

  ngOnInit() {
    this.getItemToDisplay();
  }

  getItemToDisplay() {
    this.gearService.getSelectedItem().subscribe(x => {
      this.displayedItem = x;
      this.displayedItemImageURL = this.getImageUrl();
    });
  }

  getImageUrl() {
    return 'https://static.ffxiah.com/images/icon/'+ this.displayedItem.itemId +'.png';
  }

}
