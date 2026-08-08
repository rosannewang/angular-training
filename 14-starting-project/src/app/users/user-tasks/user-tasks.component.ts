import { Component, computed, inject, input, OnInit, DestroyRef } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit{
  // userId = input.required<string>(); // import it in app.config
  private usersService = inject(UsersService);
  
  private activatedRoute = inject(ActivatedRoute); // alternative approach
  private destroyRef = inject(DestroyRef);
  userName = '';

  // userName = computed(
  //   () => this.usersService.users.find(u => u.id === this.userId())?.name
  // );

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    const subscription = this.activatedRoute.params.subscribe({
      next: paramMap => {
        this.userName = this.usersService.users.find(u => u.id === paramMap['userId'])
          ?.name || '';
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
