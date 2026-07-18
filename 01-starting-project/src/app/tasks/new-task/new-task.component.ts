import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface newTask {
  title: string;
  dueDate: string;
  summary: string;
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>(); // add void to indicate no data is being emitted

  onCancel() {
    this.cancel.emit();
  }
  
}
