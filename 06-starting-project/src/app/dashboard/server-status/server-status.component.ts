import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  // Trying to randomly change the status
  constructor() {
    setInterval(() => { 
      const rnd = Math.random(); // 0-0.999...

      const randomStatus = rnd > 0.5 ? 'online' : 'offline';
      if(rnd < 0.5){
        this.currentStatus = 'offline';
      } else if(rnd < 0.9){
        this.currentStatus = 'online';
      } else{
        this.currentStatus = 'unknown';
      }

    }, 5000); // set interval runs every 5000 ms (5 seconds)
  }
}
