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
  @Input ({required: true}) id!: string;
  @Input({required: true}) avatar!: string; // needs to have a defined type & add ! to tell TypeScript that this property will be initialized later (for our case, in html)
  @Input({required: true}) name!: string; // add {required: true} so that it pings you if you forget to pass the property
  @Output() select = new EventEmitter<string>();

  // imagePath = computed(() => {
  //   return './assets/users/' + this.avatar;
  // });

  // select = output<string>(); // output function

  get imagePath(){
    return './assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id); // emit an event to parent component
  }

}
