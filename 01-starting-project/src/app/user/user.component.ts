import { Component, computed, Input, Output, EventEmitter} from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// } // type alias (TS feature) to outsource type

interface User { // most of the time it doesn't matter to use type/interface
  id: string;
  avatar: string;
  name: string;
} 

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [], // removed because we don't want to add any components
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter();

  get imagePath(){
    return './assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id); // emit an event to parent component
  }

}
