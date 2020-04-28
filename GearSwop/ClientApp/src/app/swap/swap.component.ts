import { Component } from '@angular/core';
import {SwapService} from '../services/swap.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html'
})
export class SwapComponent {
  gearSetForm = new FormGroup({
    characterName: new FormControl(''),
    job: new FormControl(''),
    main: new FormControl(''),
    sub: new FormControl('')
  });

  constructor(private swapService: SwapService) { }

  submitGearSetForm() {
    this.swapService.postSwap(this.gearSetForm.value).subscribe(x => {
      console.log(x);
    })
  }
}
