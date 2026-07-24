import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // This is to allow the styles to be applied to the component
  host: {
    class: 'control' // add if you have certain properties added to the host element
  }
})
export class ControlComponent {
  label = input.required<string>();
}
