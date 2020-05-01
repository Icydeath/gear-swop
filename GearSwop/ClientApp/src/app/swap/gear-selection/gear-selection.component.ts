import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGearItem} from '../../Interfaces/GearItem';
import {FormControl} from '@angular/forms';
import {GearImageServiceService} from '../../services/gear-image-service.service';
import {MatOptionSelectionChange} from '@angular/material/core';
import {GearInfoService} from '../../services/gear-info.service';

@Component({
  selector: 'app-gear-selection',
  templateUrl: './gear-selection.component.html',
  styleUrls: ['./gear-selection.component.scss']
})
export class GearSelectionComponent implements OnInit {
  gearSelector = new FormControl('');
  autocompleteOptions: string[] = ['Daybreak', 'Nirvana', 'Kraken Club'];

  constructor(private gearImageServiceService: GearImageServiceService, private gearInfoService: GearInfoService) { }

  @Input() slot: string;
  @Output() chosenItem = new EventEmitter<IGearItem>();
  itemPreview: string;

  ngOnInit() {
    this.gearInfoService.getGearInfo(22063).subscribe(x => console.log(x));
  }

  saveSelectedItem() {
    //this.chosenItem.emit({ slots: this.slot, name: this.gearSelector.value, id: 1});
  }

  itemSelected($event) {
    this.itemPreview = this.gearImageServiceService.getItemImage($event.option.value);
  }
}
