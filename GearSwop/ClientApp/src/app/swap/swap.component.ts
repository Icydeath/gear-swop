import { Component } from '@angular/core';
import {SwapService} from '../services/swap.service';
import {IGearSet} from '../Interfaces/GearSet';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html'
})
export class SwapComponent {
  gearSet: IGearSet;

  constructor(private swapService: SwapService) { }

  submitGearSetForm() {
    this.swapService.postSwap(this.gearSet).subscribe(x => {
      console.log(x);
    })
  }
}
