import { Component } from '@angular/core';
import { AlertComponent } from '../../../reuseable_component/alert/alert.component';
import { MybuttonComponent } from '../../../reuseable_component/mybutton/mybutton.component';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [AlertComponent,MybuttonComponent],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  btnData: string ='';
  getData(data : string){
   debugger;
   this.btnData = data;
    }
}
