import { Component } from '@angular/core';
import { AlertComponent } from '../../../reuseable_component/alert/alert.component';
import { MybuttonComponent } from '../../../reuseable_component/mybutton/mybutton.component';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [AlertComponent,MybuttonComponent],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})


export class Comp2Component {
   
  btnData: any ='';
  getData(data : any){
    debugger;

   this.btnData = data;
    }
}
