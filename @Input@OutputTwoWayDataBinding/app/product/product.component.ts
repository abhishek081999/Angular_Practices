import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() item:number;
@Output() itemChange = new EventEmitter<number>()
itemPrice:number=15;
  constructor() { }

  ngOnInit() {
  }

  incQty(){
 this.item +=1;
 this.updateQty();
  }

  decQty(){
    this.item -=1;
    this.updateQty();
  }

  updateQty(){
  this.itemChange.emit(this.item);
  }
}
