import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [], // removed because we don't want to add any components
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[0]);
  imagePath = './assets/users/' + this.selectedUser().avatar;
  
  // get imagePath(){
  //   return './assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]); // call set for signal to overwrite a value
  }
}
