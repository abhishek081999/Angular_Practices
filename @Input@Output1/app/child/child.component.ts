import { Component,  EventEmitter,  Input,  Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input('foods') foodArr:string[];
  @Output('delEvt') foodDel = new EventEmitter<number>();
  constructor() { }

  delItem(index:number){
   this.foodDel.emit(index);
  }
  
}
