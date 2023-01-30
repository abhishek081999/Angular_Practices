import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  person = {
    name: "",
    email: "",
    cmp: "",
    sal: "",
  };

  isDataSubmitted = false;
  setValue(event) {
    const keyName = event.target.name;
    console.log(keyName);

    const value = event.target.value;
    this.person[keyName] = value;

  }

  submitData() {
    for (const key in this.person) {
      const val = this.person[key];

      if(val.trim().length==0){
        alert('Fields must not be blanked');
        return;
      }
    }

    this.isDataSubmitted = true;
    console.log(this.person);
  }

  resetForm() {
    this.person = {
      name: "",
      email: "",
      cmp: "",
      sal: "",
    };
    this.isDataSubmitted = false;
  }
}
