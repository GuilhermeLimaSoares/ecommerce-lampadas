import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/services/favorites.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  @Input() products;
  @Input() isFavorite = false;

  constructor(private readonly favoriteService: FavoritesService) { }

  ngOnInit() {
    if (this.products !== undefined){
      console.log('podutos');
      console.log(this.products);
    }
  }

  public getFavorites(obj){
    this.favoriteService.getFavorites(obj);
    console.log('inserido');
    console.log(obj);
  }

}
