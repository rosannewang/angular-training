import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // private interval?: NodeJS.Timeout
  private interval?: ReturnType<typeof setInterval> // removes Cannot find name 'NodeJS' Error

  constructor() {}

  // Trying to randomly change the status
  ngOnInit(){
    console.log('ON INIT')
    this.interval = setInterval(() => {
    const rnd = Math.random();
    if (rnd < 0.5) {
      this.currentStatus = 'offline';
    } else if (rnd < 0.9) {
      this.currentStatus = 'online';
    } else {
      this.currentStatus = 'unknown';
    }
    }, 5000);
  } // note: this method won't trigger errors, so it's recommended to add 'implements OnInit' in the class
  
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT')
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
