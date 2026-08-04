import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient); // null error on its own, so we need to provide it in the app config
  private destroyRef = inject(DestroyRef);
  // alternatively use a module or constructor:
  // constructor(private httpCleint: HttpClient) {}

  ngOnInit() {
    const subscription = this.httpClient
    .get<{ places: Place[] }>('http://localhost:3000/places', {
      observe: 'response'
      // observe: 'events' // triggered multiple times
    })
    .subscribe({
      next: (response) => {
      console.log(response);
      // console.log(event);  
      console.log(response.body?.places) // the response may be null
      }
    });

    this.destroyRef.onDestroy (() => {
        subscription.unsubscribe()
    });
  }
}
