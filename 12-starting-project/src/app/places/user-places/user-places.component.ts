import { Component, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { DestroyRef } from '@angular/core';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient); // null error on its own, so we need to provide it in the app config
  private destroyRef = inject(DestroyRef);
  
  ngOnInit() {
      this.isFetching.set(true);
      const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/user-places')
      .pipe(
        map((resData) => resData.places),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Something went wrong fetching your favorite places. Please try again later.'));
        })
      )
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
        error: (error) => {
          console.log(error);
          this.error.set(error.message);
        },
        complete: () => { // guarunteed to only run once
          this.isFetching.set(false);
        }
      });
  
      this.destroyRef.onDestroy (() => {
          subscription.unsubscribe()
      });
    }
}
