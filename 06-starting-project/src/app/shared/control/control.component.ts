import { 
  Component, 
  input, ViewEncapsulation, HostBinding, HostListener, inject, ElementRef, ContentChild, contentChild, 
  AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // This is to allow the styles to be applied to the component
  host: {
    class: 'control', // add if you have certain properties added to the host element
    
  }
  // '(click)': 'onClick()' // put in host{}
})
export class ControlComponent implements AfterContentInit{
  // @HostBinding('class') className = 'control'; // alterative to host{} above; usually discouraged
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  
  label = input.required<string>();
  private el = inject(ElementRef); // inject the ElementRef to get access to the host element
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  ngAfterContentInit() {
    console.log('After content init');
    console.log(this.control);
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }

  }
