import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.css'
})
export class TemplateFormValidationComponent {

  // creating object

  studentObj : any =  {

    firstname : '',
    lastname : '',
    username : '',
    city : '',
    state : '',
    zipcode : '',
    isAcceptTerms : false   
  }
  objValue: any;
   onSubmit(){
    debugger;
    this.objValue= this.studentObj;
  }
  onReset(){
    debugger;
    this.objValue={

      firstname : '',
      lastname : '',
      username : '',
      city : '',
      state : '',
      zipcode : '',
      isAcceptTerms : false   
    }
  }
}
