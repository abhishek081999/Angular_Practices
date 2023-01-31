import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  data:string;
  passValue({target}){
  //const val = evt.target.value;
  //or event(object)->target(object)->value  we are axtracting properties from objects
    const {value} = target;
    this.data = value;
  }
}
