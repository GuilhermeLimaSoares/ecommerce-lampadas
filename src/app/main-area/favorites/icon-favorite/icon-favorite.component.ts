import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-favorite',
  templateUrl: './icon-favorite.component.html',
  styleUrls: ['./icon-favorite.component.css']
})
export class IconFavoriteComponent implements OnInit {
  public color = false;
  constructor() { }

  ngOnInit() {
  }

  public changeColor(){
    this.color = !this.color;
  }

}
