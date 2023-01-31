import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('pdata') productData: Product;
  @Output() updateCartEvt = new EventEmitter<any>();
  isAddedtoCart: boolean = false;
  constructor() { }

incQty(){
this.productData.qty++;
}
decQty(){
  if(this.productData.qty > 1){
    this.productData.qty--;
  }
}

updateCart(){
  this.isAddedtoCart = !this.isAddedtoCart;
  let payload = {
    addToCart:this.isAddedtoCart,
    product:this.productData
  }
this.updateCartEvt.emit(payload);
}

  ngOnInit() {
  }

}
