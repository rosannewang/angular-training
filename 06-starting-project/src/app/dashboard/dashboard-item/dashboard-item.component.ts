import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: { 
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {

  // alternatively
  // @Input({required: true}) image!: { src: string; alt: string }; // We are expecting an image object; ! = never undefined
  // @Input({required: true}) title!: string;
  
  // signals approach
  image = input.required<{ src: string; alt: string }>() 
  title = input.required<string>()

}
