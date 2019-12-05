import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FavoritesService } from 'src/services/favorites.service';

@Component({
  selector: 'app-button-itens',
  templateUrl: './button-itens.component.html',
  styleUrls: ['./button-itens.component.css']
})
export class ButtonItensComponent implements OnChanges {
  public fav;
  // @Input() test;
  @Input() favorites;
  @Output() respFavorites = new EventEmitter();
  // public thereIsFavorites = false;
  constructor(private readonly favoritesService: FavoritesService) { }

  // ngOnInit() {
  //   this.getFavorites();
  // }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(changes.favorites.currentValue);
    this.fav = changes.favorites.currentValue;
    this.respFavorites.emit(changes.favorites.currentValue);
    // this.favorites = this.test;
    // changes.prop contains the old and the new value...
  }

  // public getFavorites() {
  //   this.favoritesService.favorites.subscribe((res) => {
  //     // this.fav = res;
  //     this.respFavorites.emit(res);
  //   });
  // }

  public receive(data){
    this.fav = data;
  }

}
