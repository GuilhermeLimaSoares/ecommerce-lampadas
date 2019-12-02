import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  @Input() products;

  constructor() { }

  ngOnInit() {
    if (this.products !== undefined){
      console.log('podutos');
      console.log(this.products);
    }
  }

}
