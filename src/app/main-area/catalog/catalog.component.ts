import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public availableProducts;
  public isFavorite = true;
  constructor(private readonly productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  // public getProducts(){
  //   this.productsService.getProducts().subscribe((result) => {
  //     console.log('todos o productos');
  //     console.log(result);
  //   });
  // }

  public getProducts(){
    this.productsService.products.subscribe((res) =>{
      console.log('visualizando todos os produtos');
      console.log(res);
      this.availableProducts = res;
    });
  }

}
