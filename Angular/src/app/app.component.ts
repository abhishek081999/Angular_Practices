import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // names: string[] = ['Ajit','Abhishek', 'avinash'];
  users = [
    {
      name: "ajit",
      email: "ajit@123.com",
      skill: "clang",
      website:'www.google.com'
    },
    { name: "ajibvgt", 
      email: "ajihgfhgt@123.com",  
      skill: "clanhghjg",
      website:'www.google.com'
     },
    { name: "ajithbghgv", 
    email: "ajitghhgghgh@123.com", 
    skill: "clang" ,
    website:'www.google.com'},

    { name: "ajvhgit", 
    email: "ajitbbnb@123.com", 
    skill: "clanbnbg" ,
    website:'www.google.com'},
  ];

curentUser = null;
isDisabled = true;
  showAndEdit(indexNum){
    this.isDisabled = true;
    this.curentUser = this.users[indexNum];
  }

  setValue(event){
 const value = event.target.value;
 const keyName = event.target.name;
 this.curentUser[keyName]=value;
  }

  enableEditing() {
    this.isDisabled = false;
  }
}
