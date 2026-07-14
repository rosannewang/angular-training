import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Xbox } from './xbox/xbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Xbox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signals-investigation');
}
