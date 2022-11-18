import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // myStyles = {
  //        width: '100px',
  //        height: '150px',
  //        background:'red',
  //        color:'yellow',
  // }

  // addStyles(){
  //      this.myStyles['color']= 'white';
  //      this.myStyles['border']= '2px solid black';
  // }

  myClasses = {
   box: true,
   border:false,
   circle:false,
  };

  changeShape() {
    this.myClasses.border = !this.myClasses.border;
    this.myClasses.circle = !this.myClasses.circle;
  }
}
