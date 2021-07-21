import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";
import {CartItem} from "../../common/cart-item";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => this.productDetailPage());
  }
productDetailPage(){
  const hasProductId = this.route.snapshot.paramMap.has('id');
  if(hasProductId){
    this.productService.listProductDetailPage(+this.route.snapshot.paramMap.get('id')).subscribe(data => {
        console.log(data);
        this.product = data;
      }
    );
  }
}
  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }
}
