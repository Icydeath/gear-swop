import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGearItem} from '../../Interfaces/GearItem';
import {FormControl} from '@angular/forms';
import {GearService} from '../../services/gear.service';
import {SetService} from '../../services/set.service';

@Component({
  selector: 'app-gear-selection',
  templateUrl: './gear-selection.component.html',
  styleUrls: ['./gear-selection.component.scss']
})
export class GearSelectionComponent implements OnInit {
  gearSelector = new FormControl('');
  itemPreviewData: IGearItem;
  autocompleteOptions: string[];

  constructor(private gearService: GearService, private setService: SetService ) { }
  @Input() slot: string;
  @Output() itemSaved = new EventEmitter<boolean>();

  ngOnInit() {
  }

  saveSelectedItem() {
    this.setService.updateSet(this.slot, this.gearSelector.value);
    this.itemSaved.next(false);
  }

  itemSelected($event) {
    this.gearService.updateSelectedItem($event.option.value);
    this.gearService.getSelectedItem().subscribe(x => this.itemPreviewData = x);
  }

  getGearSuggestions(){
    this.gearService.GetGearAutocompleteSuggestions("SMN", this.slot, this.gearSelector.value)
      .subscribe(x => this.autocompleteOptions = x);

  }
}
