import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  // counter = 0;
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2); 
  // Use computed() for values that depend on other signal values


  constructor() { 
    // Use effect() to run code whenever a signal changes
    effect(() => console.log(this.counter())); 
  }

  /*
   * set = replace a value
   * update = change a value based on the current value
   * mutate = change a value in-place (only for arrays & objects)
  */

  increment() {
    this.counter.set(this.counter() + 1);
    // this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
    // this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.set(this.counter() - 1);
    // this.actions.push('DECREMENT');
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
