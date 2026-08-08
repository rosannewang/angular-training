import { Routes } from '@angular/router';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

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
                path: '', // redirect to show all tasks
                redirectTo: 'tasks',
                pathMatch: 'prefix'
            },
            { 
                path: 'tasks', // your-domain/users/uid/tasks
                component: TasksComponent 
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent
            }
        ]
    },
    {
        path: '**', // fallback route - matches any route that doesn't match the above
        component: NotFoundComponent
    }
];