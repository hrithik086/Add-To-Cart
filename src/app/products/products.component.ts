import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(data => {
      this.productList=data;

      this.productList.forEach((a:any)=>{
        Object.assign(a, {quantity:1, total:a.price});
      })
    })
  }

  addToCart(item : any){
    this.cartService.addToCart(item);
  }

}
