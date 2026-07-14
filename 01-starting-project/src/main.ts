import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err)); // Tells Angular to look for the AppComponent's tag in HTML and bootstrap it
bootstrapApplication(HeaderComponent);
