import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

div1Color : string = "";
isdiv2Colored : boolean= false;
num1 : string="";
num2 : string="";
isCheckBoxChecked : boolean = false;
isDiv3Colored : boolean =  false;
SelectedCity : string ="";
colorClass : string ="";
 addGreen(){
      this.div1Color="bg-success";
 }

 addBlue(){
  this.div1Color="bg-primary";
 }

 toggleColor(){
   this.isdiv2Colored  = !this.isdiv2Colored ;
 }

  ColorByCity(SelectedCity : string) : string {

    if(SelectedCity == "india"){
      this.colorClass="bg-success";
      return this.colorClass ;
    }
    else if(SelectedCity == "china"){
      this.colorClass="bg-danger";
      return this.colorClass ;
    }
    else if(SelectedCity == "usa"){
      this.colorClass="bg-primary";
      return this.colorClass ;
    }
    else{
      this.colorClass= "bg-light";
      return this.colorClass;
    }

  }

  StudentList : any[] = [
    {StudId:11,Gender:"Male",TotalMarks:58, name:"AA",city:"jaipur", isActive:false},
    {StudId:15,Gender:"feMale",TotalMarks:48, name:"BB",city:"gujrat", isActive:false},
    {StudId:21,Gender:"Male",TotalMarks:65, name:"CC",city:"goa", isActive:true},
    {StudId:62,Gender:"feMale",TotalMarks:21, name:"DD",city:"pune", isActive:false},
    {StudId:45,Gender:"Male",TotalMarks:89, name:"EE",city:"indore", isActive:true}
  ]

  //we can also put an object of  css style 
  //creating object in st

  Style : any ={
    'color':'white',
    'background-color':'red',
    'height':'100px',
    'width':'500px',
    'border-radius':'50%'


  }
 

}
