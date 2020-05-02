import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGearItem} from '../../Interfaces/GearItem';
import {FormControl} from '@angular/forms';
import {GearService} from '../../services/gear.service';

@Component({
  selector: 'app-gear-selection',
  templateUrl: './gear-selection.component.html',
  styleUrls: ['./gear-selection.component.scss']
})
export class GearSelectionComponent implements OnInit {
  gearSelector = new FormControl('');
  autocompleteOptions: string[] = ['Daybreak', 'Nirvana', 'Kraken Club'];

  constructor(private gearService: GearService) { }

  @Input() slot: string;
  @Output() chosenItem = new EventEmitter<IGearItem>();
  itemPreviewImage: string;
  itemPreviewData: IGearItem;

  ngOnInit() {
    this.gearService.getSelectedItem().subscribe(x => this.itemPreviewData = x);
  }

  saveSelectedItem() {
  }

  itemSelected($event) {
    this.gearService.updateSelectedItem($event.option.value);
  }
}
