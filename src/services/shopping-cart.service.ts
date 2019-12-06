import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public itens = new BehaviorSubject(undefined);
  public itemCollection = [];
  constructor() { }

  public getItems(obj): void {
    this.itemCollection = this.itemCollection.concat(obj);

    // if (this.favoriteCollection.length > 0) {
    this.itens.next(this.itemCollection);
    // }
  }

  public deleteItems(index): void {
    this.itemCollection.splice(index, index + 1 );
    this.itens.next(this.itemCollection);
  }
}
