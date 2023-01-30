import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  text = "";
  textSize = 10;
  textCls ="";

  setText(event) {
    const val = event.target.value;
    this.text = val;
  }

  // setSize(operation) {
  //   if (operation == "inc") {
  //     this.textSize += 1;
  //   } else {
  //     this.textSize -= 1;
  //   }
  //}
  setSize(event){
    const val = event.target.value;
    this.textSize=val;
  }

  setColor(event){
    const val = event.target.value;
    this.textCls=val;
  }
}
