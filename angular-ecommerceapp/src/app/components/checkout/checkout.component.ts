import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CheckoutService} from "../../services/checkout.service";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm = new FormGroup({
    customerForm: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    }),
    shippingAddressForm: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zipCode: new FormControl()
    }),
    creditCardForm: new FormGroup({
      type: new FormControl(),
      nameOnCard: new FormControl(),
      cardNumber: new FormControl(),
      cvv2Number: new FormControl(),
      expirationMonth: new FormControl(),
      expirationYear: new FormControl()
    })
  });

  // constructor(private checkoutService: CheckoutService, private cartService: CartService) {}


  cartItems: CartItem [] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
// get a handle to the cart items
    this.cartItems = this.cartService.cartItems;
// subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
// subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(data => {
      this.totalQuantity = data;
      console.log("DATA", data)
    });
// compute cart total price and total quantity
    this.cartService.calculateTotals();
  }

  onSubmit() {
    console.log(this.checkoutForm.value);
  }

  purchase() {
    console.log("nimic inca");
    console.log("purchas", this.checkoutForm.value);
    //purchase
    // this.httpClient.post(`http://localhost:8080/api/order?`)
  }
}
