import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGearItem} from '../../Interfaces/GearItem';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-gear-selection',
  templateUrl: './gear-selection.component.html',
  styleUrls: ['./gear-selection.component.scss']
})
export class GearSelectionComponent implements OnInit {
  gearSelector = new FormControl('');
  autocompleteOptions: string[] = ['Daybreak', 'Smashy', 'ULTRA SMASHY'];

  constructor() { }

  @Input() slot: string;
  @Output() chosenItem = new EventEmitter<IGearItem>();

  ngOnInit() {
  }

  saveSelectedItem() {
    this.chosenItem.emit({ slot: 'Main', itemName: this.gearSelector.value})
    //Hide Gear selector
  }


}
