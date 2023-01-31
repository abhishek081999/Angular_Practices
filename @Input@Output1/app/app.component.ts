import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  foods: string[]=[];
  deletedFood: string;
  constructor(){}

 addFood(foodItem){
  this.foods.push(foodItem);
 }

 removeFood(indexFood){
  this.deletedFood = this.foods[indexFood];
   this.foods = this.foods.filter((val, index)=>index != indexFood);
   
 }
}
