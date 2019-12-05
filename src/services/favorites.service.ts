import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public favorites = new BehaviorSubject(undefined);
  public favoriteCollection = [];
  constructor() { }

  public getFavorites(obj): void {
    this.favoriteCollection = this.favoriteCollection.concat(obj);

    // if (this.favoriteCollection.length > 0) {
    this.favorites.next(this.favoriteCollection);
    // }
  }
}
