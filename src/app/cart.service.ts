import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { Product, products } from './products';
import { CartItem } from './products';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartitems: Product[] = [];  
  cart: CartItem[] = [];
  quanity = 0;
  totalprice = 0;

  event: EventEmitter<null> = new EventEmitter();
  notifyDataChange(){
    this.event.emit();
  }
  
  constructor() { }
  


  addToCart(p: Product) { 
    // this.cartitems.push(p);
    let index = -1;
    index = this.cartitems.findIndex(
      l => l.id === p.id
      );
        if (index != -1){
          this.cartitems[index].quanity += 1;
        } else if(index === -1){
          this.totalprice += p.totalprice
          this.cartitems.push(p)
        }
        this.sum();
        this.notifyDataChange();
      }
      
      getCartItem() {
        return this.cartitems;
      }
      
      getCartItemCount() {
        return this.cartitems.length;
      }
      
      getTotalprice(){
        return this.totalprice
      }
      
      clearCart(){}

      deleteItem(pid: Number) { }
      
      sum(): void{
        this.quanity = 0;
        this.totalprice = 0;
        // this.totalprice += p.price;
        if(this.cartitems){
          this.cartitems.map(products => {
            this.quanity += products.quanity
            this.totalprice += products.price * products.quanity
            console.log(this.totalprice)
      }) 
    }
  }
}
