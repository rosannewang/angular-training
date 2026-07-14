import { Component, input, signal } from '@angular/core';
import { Controller } from '../controller/controller';

@Component({
  selector: 'app-xbox',
  imports: [Controller],
  templateUrl: './xbox.html',
  styleUrl: './xbox.scss',
})
export class Xbox {
  on = signal(false);
  count = signal(0);

  onPowerOn() {
    this.on.set(true);
  }

  onPowerOff() {
    this.on.set(false);
  }

  onToggleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Toggle changed:', target.checked);
  }

  increment() {
    this.count.set(this.count() + 1);
  }
}
