import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FUllUser, User } from 'src/models/user.model';
import { FavoritesService } from 'src/services/favorites.service';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.css']
})
export class IconButtonsComponent implements OnInit {
  public test = new EventEmitter();
  public authentication: FUllUser;
  public fav;
  public favorites;
  public isOpenLogin = false;
  constructor(
    private readonly favoriteService: FavoritesService,
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    console.log('controle 1');
    console.log(this.authentication);
    this.getUser();
    this.getFavorites();
  }

  public open(value: boolean){
    return value = !value;
  }

  public getFavorites(){
    this.favoriteService.favorites.subscribe((res) => {
      console.log('botao validador');
      console.log(res);
      this.favorites = res;
      this.test.emit(res);
      // if(res !== undefined){
      // }
      
    });
  }

  public getUser(){

    this.userService.availableUser.subscribe((res) => {
      console.log('usuario atual');
      this.authentication = res;
    });
  }

  public reciverFeedback(respFavorites) {
    // this.fav = respFavorites;
    this.favorites = respFavorites;
  }
}
