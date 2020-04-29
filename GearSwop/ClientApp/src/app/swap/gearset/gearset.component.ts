import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SwapService} from '../../services/swap.service';
import {GearSetService} from '../../services/gear-set.service';

@Component({
  selector: 'app-gearset',
  templateUrl: './gearset.component.html',
  styleUrls: ['./gearset.component.scss']
})
export class GearsetComponent implements OnInit {
  main = "Main";
  gearSetForm = new FormGroup({
    main: new FormControl(''),
    sub: new FormControl(''),
    range: new FormControl(''),
    ammo: new FormControl(''),
    head: new FormControl(''),
    body: new FormControl(''),
    hands: new FormControl(''),
    legs: new FormControl(''),
    feet: new FormControl(''),
    neck: new FormControl(''),
    waist: new FormControl(''),
    leftEar: new FormControl(''),
    rightEar: new FormControl(''),
    leftRing: new FormControl(''),
    rightRing: new FormControl(''),
    back: new FormControl(''),
  });

  constructor(private swapService: SwapService, private gearSetService: GearSetService) { }

  ngOnInit() { }

  updateItem($event) {
    this.gearSetService.updateSingleItem($event.slot, $event.itemName)
  }

  submitGearSetForm() {
    this.gearSetService.updateFullSet(this.gearSetForm.value);
  }
}
