import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  isdiv1Visisble : boolean = true;

  isdiv2Visisble : boolean = false;

  num1 :string ="";
  num2: string ="";

  isCheckBoxChecked : boolean = true;
  showdiv(){

    this.isdiv1Visisble=true;
  }

  hidediv(){
    this.isdiv1Visisble=false;
  }
  toggleDiv2(){
    this.isdiv2Visisble=! this.isdiv2Visisble;
  }

  selectedStatus : string = "";

}
