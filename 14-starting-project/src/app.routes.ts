import { Routes } from '@angular/router';

import { routes as userRoutes } from './app/users/users.routes';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', // your-domain/
        component: NoTaskComponent,
    },
    { 
        path: 'users/:userId', // your-domain/users/uid
        component: UserTasksComponent, // add child router in user-tasks html
        children: userRoutes
    },
    {
        path: '**', // fallback route - matches any route that doesn't match the above
        component: NotFoundComponent
    }
];