import { Component } from '@angular/core';
import {SwapService} from '../services/swap.service';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html'
})
export class SwapComponent {
  characterName: string;
  job: string;

  constructor(swapService: SwapService) {
    swapService.getSwap().subscribe( res => {
      this.characterName = res.characterName;
      this.job = res.job
    })
  }

}
