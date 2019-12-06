import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public favorites = [];
  public isFavorite = true;
  constructor(
    private readonly favoriteService: FavoritesService,
  ) { }

  ngOnInit() {
  this.showFavorites();

  }

  public showFavorites(){
    this.favoriteService.favorites.subscribe((res) => {
      console.log('recebido');
      console.log(res);
      if(res !== undefined){
        this.favorites = res;
      }
    });
  }

}
