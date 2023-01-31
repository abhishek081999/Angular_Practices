import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  foods: string[]=[];
  constructor(){}

  afterFoodAdd(food){
   this.foods.push(food);
  }
}
