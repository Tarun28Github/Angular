import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
     // datatype in ts string boolean number date

      courseName : string = "Angular 18";

      inputType = "checkbox";

     rollNo : number = 123;    // either int or float does not matter datatype always number

      isIndian: boolean = false;
      
      currentDate : Date = new Date(); // same as js

      className: string = "bg-primary";

      selectState : string ="gujarat";

      //creating signal
      firstName = signal("raju rastogi");


     //constructor in ts

      constructor(){
        //this.courseName = "asd;jhp";
      }

      //function in ts

      showAlert(message : string){


        alert(message);
      }

      changeCourceName(){
        this.courseName = "React Js";
      }

      changeSignalName(){
        //since it is a signal it value will change diffrently not as normal variable
        this.firstName.set("himank singh");
      }
}
