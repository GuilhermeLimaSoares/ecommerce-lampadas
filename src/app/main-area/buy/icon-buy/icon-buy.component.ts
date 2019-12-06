import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-buy',
  templateUrl: './icon-buy.component.html',
  styleUrls: ['./icon-buy.component.css']
})
export class IconBuyComponent implements OnInit {
  public color = false;
  constructor() { }

  ngOnInit() {
  }

  public changeColor(){
    this.color = !this.color;
  }


}
