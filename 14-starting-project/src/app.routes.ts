import { Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';

export const routes: Routes = [
    {
        path: '', // your-domain/
        component: NoTaskComponent,
    },
    { 
        path: 'tasks', // your-domain/tasks
        component: TasksComponent 
    }
];