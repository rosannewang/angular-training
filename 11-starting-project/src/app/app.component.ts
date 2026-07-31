import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  private destroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    // automatically produces an observable that emits a number every second
    // you need at least 1 subscriber to start emitting values
    const subscription = interval(1000).subscribe({ // counts up from 0
      next: (val) => console.log(val), // triggered for every new value
      // error: () => {} // triggered if there's an error; useful for HTTP requests
    }); 
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

}
