import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  selectedSkill = '';


  handleEvent(event) {
    const value = event.target.value;
    this.selectedSkill=value;
  }
//   data='';
//     isDataArrived = false;

//     constructor(){
//       this.getData();
//     }

//     getData(){
//       setTimeout(()=>{
//         this.data='data from server';
//         this.isDataArrived = true;
//       },4000);
//     }
 }
