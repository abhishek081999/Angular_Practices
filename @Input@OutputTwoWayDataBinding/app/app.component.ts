import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
 data:number = 1;
  constructor(){}

 addToQty(val){
  this.data=val;
 }

 showData(val){
  this.data=val;   //from child product
 }
}
