import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-button-shopping',
  templateUrl: './button-shopping.component.html',
  styleUrls: ['./button-shopping.component.css']
})
export class ButtonShoppingComponent implements OnInit {

  constructor(private readonly shoppinService: ShoppingCartService) { }

  ngOnInit() {

  }

}
