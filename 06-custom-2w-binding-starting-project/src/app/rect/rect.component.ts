import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({required: true}) size!: {width: string; height: string};
  // @Output() sizeChange  = new EventEmitter<{width: string; height: string}>(); // Output must be named varChange 

  size = model.required<{width: string; height: string}>(); // size is a model signal

  onReset() {
    this.size.set({
      width: '200',
      height: '200'
    })
  }
}
