import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent
    ],
    bootstrap: [AppComponent], // array of all root components
    imports: [BrowserModule, SharedModule, TasksModule] // Data pipe is already included in BrowserModule
})

export class AppModule{

}

/**
 * Notes:
 * - You can add stanalone components to modules and vice versa
 * - You can mix and match standalone and non-standalone components
 */