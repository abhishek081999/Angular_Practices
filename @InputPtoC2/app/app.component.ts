import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
// export class AppComponent {
//   heroList:string[]=[];
//   addHero({target}){
//   //const val = evt.target.value;
//   //or event(object)->target(object)->value  we are axtracting properties from objects
//     const {value} = target;
//     this.heroList.push(value);
//   }
// }
export class AppComponent {
  hero: any = {};
  addHero({ target }) {
    const { value } = target;
    this.hero = {
      name: value,
      id:Math.random()
    };
  }
}
