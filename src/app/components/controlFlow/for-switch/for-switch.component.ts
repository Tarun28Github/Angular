import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {

   inputNum : string ="";
  StudentList : any[] = [
    {StudId:11,name:"AA",city:"jaipur", isActive:false},
    {StudId:15,name:"BB",city:"gujrat", isActive:false},
    {StudId:21,name:"CC",city:"goa", isActive:true},
    {StudId:62,name:"DD",city:"pune", isActive:false},
    {StudId:45,name:"EE",city:"indore", isActive:true}
  ]

  City : String [] = ["gujarat","jaipur","pune","mumbai","delhi"]
}
