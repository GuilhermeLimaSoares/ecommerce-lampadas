import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products;
  public isFavorite = true;
  constructor(
    private readonly productsService: ProductsService,
    private readonly userService: UserService) { }

  ngOnInit() {

    this.userService.availableUser.subscribe((res) => {
      console.log('usuario atual');
      console.log(res);
    });

    this.getProducts();
  }


  public getProducts(){
    let prods;
    this.productsService.getProducts()
    .subscribe((res) => {
      prods = res;
      this.products = prods.slice(0, 4);
    });
  }

}
