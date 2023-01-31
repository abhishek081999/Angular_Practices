import { Component,  EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  constructor() { }
  @Output() foodEvt:EventEmitter<string> = new EventEmitter<string>();
  addToFood(value){
    this.foodEvt.emit(value);
  }
  
}
