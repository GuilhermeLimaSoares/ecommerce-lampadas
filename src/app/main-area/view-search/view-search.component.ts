import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {
  public isFavorite = true;
  public searchProducts;
  public void;
  constructor(private readonly productsService: ProductsService) { }

  ngOnInit() {
    this.getSearchProducts();
  }

  public getSearchProducts() {
    this.productsService.searchProducts.subscribe((res) => {

      if (res === 'undefined') {
        // this.void = undefined;
        this.void = 'Não há resultados para a busca :(';
      } else {
        this.searchProducts = res;
      }
    });
  }

}
