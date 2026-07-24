import { Component } from '@angular/core';

@Component({
  /**
   * button[appButton] tells Angular to apply this component to any button element with the appButton attribute
   * button.button-primary tells Angular to apply this component to any button element with the button-primary class
   */
  selector: 'button[appButton], a[appButton]',  // we can have lists of selectors
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
