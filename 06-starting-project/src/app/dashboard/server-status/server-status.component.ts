import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DestroyRef } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef); // set up as a property, then set up a listener for that property

  constructor() {}

  // Trying to randomly change the status
  ngOnInit(){
    console.log('ON INIT')
    const interval = setInterval(() => {
    const rnd = Math.random();
    if (rnd < 0.5) {
      this.currentStatus = 'offline';
    } else if (rnd < 0.9) {
      this.currentStatus = 'online';
    } else {
      this.currentStatus = 'unknown';
    }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  } // note: this method won't trigger errors, so it's recommended to add 'implements OnInit' in the class
  
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT')
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
