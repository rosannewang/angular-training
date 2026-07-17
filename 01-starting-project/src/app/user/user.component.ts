import { Component, computed, Input, Output, EventEmitter} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [], // removed because we don't want to add any components
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  }
  @Output() select = new EventEmitter();

  get imagePath(){
    return './assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id); // emit an event to parent component
  }

}
