import { Component, DestroyRef, OnInit, computed, effect, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);
  // message = computed(() => `Interval: ${this.interval()}, Double Interval: ${this.doubleInterval()}`);
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const intervalId = setInterval(() => {
      // subscriber.error('Error occurred'); 
      if (timesExecuted >= 3) {
        clearInterval(intervalId);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value ... ');
      subscriber.next({message: 'New value', value: 1});
      timesExecuted++;
    }, 1000);
  });
  private destroyRef = inject(DestroyRef);


  constructor(){
    // effect(() => { // subscription set up for you
    //   console.log(`Clicked button ${this.clickCount()} times`);
    // });
  }
  
  ngOnInit(): void {
    // setInterval(() => {
    //   this.interval.update(prevIntevalNumber => prevIntevalNumber + 1);
    // }, 1000);

    // effect(() => {
    //   console.log(this.message()); // no subscription needed
    // });

    // // automatically produces an observable that emits a number every second
    // // you need at least 1 subscriber to start emitting values
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2),
    //   // add more operators as needed here
    // ).subscribe({ // counts up from 0
    //   next: (val) => console.log(val), // triggered for every new value
    //   // error: () => {} // triggered if there's an error; useful for HTTP requests
    // }); 
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed'),
      error: (err) => console.log(err),
    });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${val} times`),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  
    // this.clickCount$.subscribe({
    //   next: (val) => console.log(`Clicked button ${this.clickCount()} times`),
    // });
  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
