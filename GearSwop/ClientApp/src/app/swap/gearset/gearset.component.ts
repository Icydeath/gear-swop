import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SwapService} from '../../services/swap.service';

@Component({
  selector: 'app-gearset',
  templateUrl: './gearset.component.html',
  styleUrls: ['./gearset.component.scss']
})
export class GearsetComponent implements OnInit {
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

  constructor(private swapService: SwapService) { }

  ngOnInit() {
  }

  submitGearSetForm() {
    this.swapService.postSwap(this.gearSetForm.value).subscribe(x => {
      console.log(x);
    })
  }

}
