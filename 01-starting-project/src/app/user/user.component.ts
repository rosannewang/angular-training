import { Component, computed, Input, input } from '@angular/core';
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

  // @Input({required: true}) avatar!: string; // needs to have a defined type & add ! to tell TypeScript that this property will be initialized later (for our case, in html)
  // @Input({required: true}) name!: string; // add {required: true} so that it pings you if you forget to pass the property
  
  // these input.required ... act as data containers:
  avatar = input.required<string>(); // tells Angular that this is an input property in html (generic type is string from TS)
  name = input.required<string>(); // alternative to using the decorators (@'s) commented out above


  // get imagePath(){
  //   return './assets/users/' + this.avatar();
  // }

  imagePath = computed(() => {
    return './assets/users/' + this.avatar();
  });

  onSelectUser(){}

}
