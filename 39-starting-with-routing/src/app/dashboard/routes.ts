import { Route } from "@angular/router";
import { TodayComponent } from "./today/today.component";

export const DASHBOARD_ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./today/today.component').then(m => m.TodayComponent)
    },
    {
        path: 'today',
        component: TodayComponent
    }
]
