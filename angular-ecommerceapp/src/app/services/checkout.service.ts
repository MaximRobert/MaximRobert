import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient: HttpClient) {
  }

  saveCheckoutForm(){

  }

  // getOrderItems(): Observable<Product[]> {
  //   return null;//this.httpClient.get<Product[]>(`http://localhost:8080/api/products?category_id=${categoryId}`)
  // }
  //


  listOrderItems() {
    // return this.httpClient.get('http://localhost:8080/api/categories');
  }


  listProductDetailPage(id: number){
    // return this.httpClient.get(`http://localhost:8080/api/products/${id}`)
  }

}
