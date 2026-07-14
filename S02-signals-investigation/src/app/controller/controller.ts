import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  imports: [],
  templateUrl: './controller.html',
  styleUrl: './controller.scss',
})
export class Controller {
  @Output() crossClick = new EventEmitter<void>();
  @Output() triangleClick = new EventEmitter<void>();

  onKeyboardChange(value: string) {
    console.log('Keyboard input changed:', value);
  }
}
