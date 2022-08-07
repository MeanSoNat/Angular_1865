import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items = this.cartService.getCartItem();
  IteminCart = this.cartService.getCartItemCount();
  totalprice = this.cartService.getTotalprice();
  
  clear(pid: any){
    let index = this.items.findIndex(item => item.id === pid);
    this.items.splice(index, 1)
    this.cartService.sum()
  }

  deleteCart(){
    this.items = []
    this.cartService.clearCart()
    this.cartService.sum()
  }
  
 
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
