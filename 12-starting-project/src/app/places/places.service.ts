import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place.model';
import { catchError, map, throwError, tap } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService);
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

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if(!prevPlaces.some(p => p.id === place.id)) { 
      this.userPlaces.set([...prevPlaces, place]);
    }
    
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id,
    }).pipe(
      catchError(error => {
        this.userPlaces.set(prevPlaces)
        this.errorService.showError('Failed to add place to user places.');
        return throwError(() => new Error('Failed to add place to user places.'));
      })
    );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if(prevPlaces.some(p => p.id === place.id)) { 
      this.userPlaces.set(prevPlaces.filter(p => p.id !== place.id));
    }
    return this.httpClient.delete('http://localhost:3000/user-places/' + place.id).pipe(
      catchError(error => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to remove place from user places.');
        return throwError(() => new Error('Failed to remove place from user places.'));
      })
    );
  }

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
