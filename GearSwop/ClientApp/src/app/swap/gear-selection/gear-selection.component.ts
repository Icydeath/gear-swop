import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGearItem} from '../../Interfaces/GearItem';
import {FormControl} from '@angular/forms';
import {GearImageServiceService} from '../../services/gear-image-service.service';
import {MatOptionSelectionChange} from '@angular/material/core';

@Component({
  selector: 'app-gear-selection',
  templateUrl: './gear-selection.component.html',
  styleUrls: ['./gear-selection.component.scss']
})
export class GearSelectionComponent implements OnInit {
  gearSelector = new FormControl('');
  autocompleteOptions: string[] = ['Daybreak', 'Nirvana', 'Kraken Club'];

  constructor(private gearImageServiceService: GearImageServiceService) { }

  @Input() slot: string;
  @Output() chosenItem = new EventEmitter<IGearItem>();
  itemPreview: string;

  ngOnInit() {
  }

  saveSelectedItem() {
    this.chosenItem.emit({ slot: this.slot, itemName: this.gearSelector.value, itemId: 1});
  }

  itemSelected($event) {
    this.itemPreview = this.gearImageServiceService.getItemImage($event.option.value);
  }
}
