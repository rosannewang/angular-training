import { Routes } from '@angular/router';

import { routes as userRoutes } from './app/users/users.routes';
import { resolveTitle, resolveUserName, UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', // your-domain/
        component: NoTaskComponent,
        // redirectTo: '/users/u1',
        // pathMatch: 'full'
        title: 'No task selected'
    },
    { 
        path: 'users/:userId', // your-domain/users/uid
        component: UserTasksComponent, // add child router in user-tasks html
        children: userRoutes,
        data: { // static data
            message: 'Hello!'
        },
        resolve: { // dynamic data
            userName: resolveUserName // point at the function
        },
        title: resolveTitle
    },
    {
        path: '**', // fallback route - matches any route that doesn't match the above
        component: NotFoundComponent
    }
];