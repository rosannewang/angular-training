import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place.model';
import { catchError, map, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly(); // same as userPlaces but readonly

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places', 
      'Something went wrong loading the available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places', 
      'Something went wrong loading your favorite places. Please try again later.'
    ).pipe(tap({ // update date in service without subscribing.
      next: (userPlaces) => this.userPlaces.set(userPlaces)
    }));
  }

  addPlaceToUserPlaces(placeId: string) {
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId,
    });
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
        map((resData) => resData.places),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error(errorMessage));
        })
      )
  }
}
