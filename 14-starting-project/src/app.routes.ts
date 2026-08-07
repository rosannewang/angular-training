import { Routes } from '@angular/router';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';

export const routes: Routes = [
    {
        path: '', // your-domain/
        component: NoTaskComponent,
    },
    { 
        path: 'users/:userId', // your-domain/users/uid
        component: UserTasksComponent
    }
];