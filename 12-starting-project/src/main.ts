import { bootstrapApplication } from '@angular/platform-browser';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';

function loggingInterceptor(
    request: HttpRequest<unknown>, 
    next: HttpHandlerFn
) {
    // const req = request.clone({
    //     headers: request.headers.set('X-DEBUG', 'TESTING')
    // });
    console.log('[Outgoing Request]');
    console.log(request);
    // return next(req);
    return next(request);
}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
        withInterceptors([loggingInterceptor]) // register all interceptors for all requests and responses
    )]
}).catch((err) => console.error(err));
