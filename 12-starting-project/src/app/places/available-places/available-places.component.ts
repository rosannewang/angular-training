import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient); // null error on its own, so we need to provide it in the app config
  private destroyRef = inject(DestroyRef);
  // alternatively use a module or constructor:
  // constructor(private httpCleint: HttpClient) {}

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.httpClient
    .get<{ places: Place[] }>('http://localhost:3000/places')
    .pipe(
      map((resData) => resData.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error('Something went wrong fetching available places. Please try again later.'));
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

  onSelectPlace(selectedPlace: Place) {
    this.httpClient
    .put('http://localhost:3000/user-places', {
      placeId: selectedPlace.id
    }).subscribe({
      next: (resData) => console.log(resData),
    });
      
  }
}
