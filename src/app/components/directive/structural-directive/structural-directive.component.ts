import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  //structural directive ngif, ngfor

  isDiv1Visible : boolean = false;

  isDiv2Visible: boolean = false;

  num1 : string = "";
  num2 : string= "";

  isSelect: boolean = true;

  isSelectedState : string = "india";
  

  // creating array in ts;
  SelectCity : string []= ["mumbai","pune","gujart","jaipur","goa"];
  showdiv1(){

    this.isDiv1Visible = true;
  }
  hidediv1(){
    this.isDiv1Visible=false;
  }


  toggleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }

  //creating object in ts
// any is a datatype use to create object
  StudentList : any[] = [
    {StudId:11,name:"AA",city:"jaipur", isActive:false},
    {StudId:15,name:"BB",city:"gujrat", isActive:false},
    {StudId:21,name:"CC",city:"goa", isActive:true},
    {StudId:62,name:"DD",city:"pune", isActive:false},
    {StudId:45,name:"EE",city:"indore", isActive:true}
  ]

  // redirecting to attribute dir from ts;

  //first need to inject router object in this class
  //for that we use constructor

  constructor(private router : Router){

  }

  goToAttribute(){
    this.router.navigateByUrl('attribute-directive');
  }

}
