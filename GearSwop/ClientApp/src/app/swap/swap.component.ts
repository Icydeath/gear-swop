import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html'
})
export class SwapComponent {
  characterJobForm = new FormGroup({
    characterName: new FormControl(''),
    job: new FormControl('')
  });

  submitJobForm() {
    console.log(this.characterJobForm.value);
  }
}
