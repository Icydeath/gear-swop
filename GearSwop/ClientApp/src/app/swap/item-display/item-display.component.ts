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

  constructor(private gearService: GearService) { }

  ngOnInit() {
    this.gearService.getSelectedItem().subscribe(x => this.displayedItem = x);
  }


}
