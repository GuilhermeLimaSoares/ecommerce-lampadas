import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public search;
  public searchArray = [];
  public productsArray = [];
  public filterProducts = [];
  constructor(private readonly productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getCategory(product){
    this.filterProducts = this.productsArray.filter((result) => result.category === product);
    console.log('array filtrado');
    console.log(this.filterProducts);
    this.productsService.showProducts(this.filterProducts);
  }

  public getProducts() {
    this.productsService.getProducts().subscribe((result) => {
      console.log('todos o productos');
      console.log(result);
      this.productsArray = this.productsArray.concat(result);
    });
  }

  public searchProducts(data){
    this.searchArray = [];
    this.productsArray.map((res) => {
      if (res.name.search(data) !== -1) {
        this.searchArray = this.searchArray.concat(res);
        console.log('items pesquisados');
        console.log(this.searchArray);
        this.productsService.getSearchProducts(this.searchArray);
      } else {
        // this.searchArray = [];
        this.productsService.getSearchProducts('undefined');
      }
    });
  }

}
