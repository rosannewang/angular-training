import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { LoggingService } from './app/logging.service';

export const TasksServiceToken = new InjectionToken<TasksService>(
    'tasks-service-token'
); // custom injection token

bootstrapApplication(AppComponent, {
    providers: [LoggingService, {provide: TasksServiceToken, useClass: TasksService}] // EnvironmentInjector; does not allow for tree shaping
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));