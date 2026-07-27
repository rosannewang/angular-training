import { Component, ElementRef, ViewChild, viewChild, AfterViewInit, Output, EventEmitter, output, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  
  enteredTitle = signal('');
  enteredText = signal('');

  add = output<{title: string, text: string}>();
  // @Output() add = new EventEmitter<title: string, text: string}>(); // alternatively

  ngOnInit(){
    console.log('On init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    console.log({title: this.enteredTitle(), text: this.enteredText()});
    this.add.emit({title: this.enteredTitle(), text: this.enteredText()});
    // this.form?.nativeElement.reset();
    this.enteredTitle.set('');
    this.enteredText.set('');
  }
}
