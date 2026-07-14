import { Component } from '@angular/core';
import { Controller } from '../controller/controller';

@Component({
  selector: 'app-pc',
  imports: [Controller],
  templateUrl: './pc.html',
  styleUrl: './pc.scss',
})
export class Pc {
  onCrossClick() {
    console.log('Cross button clicked!');
  }

  onTriangleClick() {
    console.log('Triangle button clicked!');
  }
}
