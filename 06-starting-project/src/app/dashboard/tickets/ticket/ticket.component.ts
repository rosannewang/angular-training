import { Component, input, signal, output } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();

  // Alternative way to define input with default value
  // Avoid using an alias
  // data = input<Ticket>(null, {}); // optional input with default valu
  // data = inupt<Ticket>({transform: (value) => value || null})
  // @Input({}) ...
  // @Output({}) ... , where {} is where the alias is placed
  close = output(); 
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update(value => !value);
  }
  
  onMarkAsCompleted() {
    this.close.emit();
  }
}
