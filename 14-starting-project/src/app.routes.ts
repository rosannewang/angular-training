import { Routes } from '@angular/router';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';

export const routes: Routes = [
    {
        path: '', // your-domain/
        component: NoTaskComponent,
    },
    { 
        path: 'users/:userId', // your-domain/users/uid
        component: UserTasksComponent, // add child router in user-tasks html
        children: [
            { 
                path: 'tasks', // your-domain/users/uid/tasks
                component: TasksComponent 
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent
            }
        ]
    }
];