import { Component, DestroyRef, OnInit, computed, effect, inject, signal } from '@angular/core';
import { interval, map } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  clickCount = signal(0);
  interval = signal(0);
  doubleInterval = computed(() => this.interval() * 2);
  message = computed(() => `Interval: ${this.interval()}, Double Interval: ${this.doubleInterval()}`);
  private destroyRef = inject(DestroyRef);


  constructor(){
    effect(() => { // subscription set up for you
      console.log(`Clicked button ${this.clickCount()} times`);
    });
  }
  
  ngOnInit(): void {
    setInterval(() => {
      this.interval.update(prevIntevalNumber => prevIntevalNumber + 1);
    }, 1000);

    effect(() => {
      console.log(this.message()); // no subscription needed
    });

    // automatically produces an observable that emits a number every second
    // you need at least 1 subscriber to start emitting values
    const subscription = interval(1000).pipe(
      map((val) => val * 2),
      // add more operators as needed here
    ).subscribe({ // counts up from 0
      next: (val) => console.log(val), // triggered for every new value
      // error: () => {} // triggered if there's an error; useful for HTTP requests
    }); 
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
