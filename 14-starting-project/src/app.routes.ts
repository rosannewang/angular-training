import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';

import { routes as userRoutes } from './app/users/users.routes';
import { resolveTitle, resolveUserName, UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router)
    const shouldGetAccess = Math.random();
    if (shouldGetAccess < 0.5) {
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

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
        canMatch: [dummyCanMatch],
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