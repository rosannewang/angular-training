import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  // Trying to randomly change the status
  ngOnInit(){
    const rnd = Math.random();
    if (rnd < 0.5) {
      this.currentStatus = 'offline';
    } else if (rnd < 0.9) {
      this.currentStatus = 'online';
    } else {
      this.currentStatus = 'unknown';
    }
  } // note: this method won't trigger errors, so it's recommended to add 'implements OnInit' in the class
}
