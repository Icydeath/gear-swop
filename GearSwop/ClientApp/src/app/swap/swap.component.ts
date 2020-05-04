import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SwapService} from '../services/swap.service';
import {SetService} from '../services/set.service';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss']
})
export class SwapComponent {
  jobs: string[] = ['Warrior', 'Monk', 'White Mage', 'Black Mage', 'Red Mage', 'Thief', 'Paladin', 'Dark Knight',
    'Beastmaster', 'Bard', 'Ranger', 'Samurai', 'Ninja', 'Dragoon', 'Summoner', 'Blue Mage', 'Corsair', 'Puppetmaster',
    'Dancer', 'Scholar', 'Geomancer', 'Rune Fencer'];
  jobAbbreviation: string[] = ['WAR', 'MNK', 'WHM', 'BLM', 'RDM', 'THF', 'PLD', 'DRK', 'BST', 'BRD', 'RNG', 'SAM', 'NIN',
    'DRG', 'SMN', 'BLU', 'COR', 'PUP', 'DNC', 'SCH', 'GEO', 'RUN'];

  jobNameSet: boolean = false;

  jobNameForm = new FormGroup({
    characterName: new FormControl({value: '', disabled: this.jobNameSet}, Validators.required),
    job: new FormControl({value: '', disabled: this.jobNameSet}, Validators.required),
  })

  constructor(private swapService: SwapService, private setService: SetService) {  }

  submitNameJob() {
    this.jobNameForm.disable();
    this.swapService.setNameJob(this.jobNameForm.value);
    this.jobNameSet = true;
  }

  editNameJob() {
    this.jobNameForm.enable();
    this.jobNameSet = false;
  }

  submitSwap() {
    this.swapService.postSwap().subscribe(x => console.log(x));
  }
}
