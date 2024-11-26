import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from-validation',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],//first import reactiveFormModule
  templateUrl: './reactive-from-validation.component.html',
  styleUrl: './reactive-from-validation.component.css'
})
export class ReactiveFromValidationComponent {

// create object of FormGroup

StudentForm: FormGroup = new FormGroup({

  //create instance of formControl ie form field
  //choose fild name according to the api field name

  firstName:new  FormControl("",[Validators.required,Validators.minLength(4)]), //(""[mulitiple validaters])
  lastName:new  FormControl(""), 
  userName:new  FormControl("some@123",[Validators.required,Validators.email]), 
  city:new  FormControl(""), 
  state:new  FormControl(""), 
  zipcode:new  FormControl(""), 
  isAcceptTerms:new  FormControl("")


});

formValue : any;

onSubmit(){

  this.formValue = this.StudentForm.value;

}
}
