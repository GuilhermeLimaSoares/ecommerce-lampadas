import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public products;
  constructor(private readonly shoppingg: ShoppingCartService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.shoppingg.itens.subscribe((res) => {
      this.products = res;
    });
  }

}
