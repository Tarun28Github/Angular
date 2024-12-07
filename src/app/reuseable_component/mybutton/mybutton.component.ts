import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  standalone: true,
  imports: [],
  templateUrl: './mybutton.component.html',
  styleUrl: './mybutton.component.css'
})
export class MybuttonComponent {

@Input() btnText : string ='';
@Input() btnClass : string ='';

// in the case of output we need to import output & eventemitter becouse output is the combination of both

@Output() onBtnClick  = new EventEmitter<any>();

onClick(){
  debugger;
  this.onBtnClick.emit("Hii my name is tarun");
}
}
