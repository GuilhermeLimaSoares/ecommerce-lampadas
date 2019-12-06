import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public isCancel = true;
  public itens = [];
  constructor(private readonly shoppinService: ShoppingCartService) { }

  ngOnInit() {
    this.getItens();
  }

  public getItens(){
    this.shoppinService.itens
    .subscribe((res) => {
      this.itens = res;
    });
  }


}
