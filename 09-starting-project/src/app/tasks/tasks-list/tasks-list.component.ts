import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService); // inject(injectionToken)
  selectedFilter = signal<string>('all');
  tasks = this.tasksService.allTasks; // Signal is immutable, but the array it contains can be mutated
  
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
