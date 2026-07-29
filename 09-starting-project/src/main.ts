import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent, {
//     providers: [TasksService] // EnvironmentInjector; does not allow for tree shaping
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));