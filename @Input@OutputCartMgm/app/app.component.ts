import { Component } from "@angular/core";
import { Product } from "./product";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  data:Product[]=[
    {name:'Pen', qty:1 , price:100},
    {name:'Mobile', qty:5 , price:10000},
    {name:'Laptop', qty:7 , price:100000},
];
  
cartBucket:Product[]=[];
constructor(){
}

calcPrice(){
  let total = 0;
  this.cartBucket.forEach(item=>{
     total = total+item.qty * item.price} );
     return total;
};

update(payload){
  if(payload.addToCart){
    this.cartBucket.push(payload.product)
  }else{
      this.cartBucket= this.cartBucket.filter(item=> item!=payload.product)
  }
}
}
