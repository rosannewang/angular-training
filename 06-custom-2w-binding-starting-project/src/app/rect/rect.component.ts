import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({required: true}) size!: {width: string; height: string};
  @Output() sizeChange  = new EventEmitter<{width: string; height: string}>(); // Output must be named varChange 

  onReset() {
    this.sizeChange.emit({
      width: '200',
      height: '200'
    }); // the parameters are what we want to reset the rectangle to
  }
}
