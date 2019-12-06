import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
// import { ForkJoin} from 'rxjs';
// import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-final-buy',
  templateUrl: './final-buy.component.html',
  styleUrls: ['./final-buy.component.css']
})
export class FinalBuyComponent implements OnInit {
  public products;
  public pay = []
  public totalPrice = 0;
  public valor;
  public price = new BehaviorSubject(undefined);
  public final = new BehaviorSubject(undefined);
  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit() {
    // this.getItens();
    // forkJoin(of(this.getItens()), this.final)
    // .subscribe((res) =>{
    //   console.log(res);
    //   this.calculate();
    // });
    this.getItens();
  }

  public getItens(){
    this.shoppingService.itens.subscribe((res) =>{
      console.log('products');
      console.log(res);
      this.products = res;
      this.pay = this.pay.concat(res);
      this.final.next(this.pay);
      this.calculate();
    });
  }

  // public calculate(){
  //   this.final.subscribe((res) => {
  //     this.totalPrice = this.totalPrice + res.price;
  //     console.log('preço total');
  //     console.log(this.totalPrice);
  //   });
  // }

  public calculate(){
    // this.final.subscribe((res) => {
    //   this.totalPrice = this.totalPrice + res.price;
    //   console.log('preço total');
    //   console.log(this.totalPrice);
    // });
    this.pay.forEach((res) => {
      this.totalPrice = this.totalPrice + parseInt(res.price);
      console.log('preço total');
      // console.log(this.totalPrice);
      this.price.next(this.totalPrice);

      this.price.subscribe((res) => {
        this.valor = res;
            });
    });
  }

}
