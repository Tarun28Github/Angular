import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush //here changedetection is disable
})
export class SignalComponent {
 // signal is nothing but the replacement of observeable which is in Rxjs
 // Basically it will react to some thing when we change its value 
 // this is very very important.

  lastname : string = 'python';

 // creating signal variable

 firstName = signal('tomar');
rollno = signal<number>(123); // datatype specific signal
 // accessing signal in .ts
 constructor(){
  const fname = this.firstName();// we cant access it like normal variable 
  setTimeout(()=>{

    // this.firstName.set('java devloper');

    this.lastname ='java';

    /**IMPOTANT FOR INTERVIEW: WHEN WE TRY TO MAKE CHANGE THE VALUE OF A NORMAL VARIABLE AT THE TIME WHEN CHANGEDETECTION IS DISABLE
     * THE VALUE OF NORMAL VARIABLE DOES CHANGE IN BACKEND BUT DOES NT SHOW AT HE FRONT . UNLESS WE REFRESH THE PAGE
     * OR WE HAD USE A SIGNAL VARIABLE AND CHANGE IT VALUE SOMEWHERE ON THE SAME PAGE.
     * 
     * A SIGNAL VARIABLE CAN CHANGE ITS VALUE FORM BACKEND AND ALSO SHOW IT ON FRONTEND ,EITHER THE CHANGEDETECTION IS DISABLE OR ENABLE.
     * BUT A NORMAL VARIABLE CAN CHANGE AND SHOW ITS VALUE WHEN THE CHANGEDETECTION IS ENABEL, IN CASE OF DISABLE IT CAN CHANGE BUT CANT SHOW.
     * 
     * THIS IS THE MAIN DIFFRENCE IN SINGNAL AND NORMAL VARIABLE.
     *
     */

  },5000)
 }

 // changing the value of signal on click button
 changename(){

  // to change signal value we use set method
  this.firstName.set('tarun'); 
 }

//concept of computed()

fname = signal('tomar');
lname = signal('tarun');

fullname = computed(()=> this.fname()+' '+this.lname());

changefname(){
  this.fname.set('gopal') ;
}

changelname(){
  this.lname.set('borana') ;
}

//here we are trying to chnage the value of fullname by changeing the value of two singnal on which fullname value is dependent.
//also we are performing concatinatin operarion.


//signal with arry

cityList = signal(['pune','mumbai']);

//adding city onbutton click

addcity(){
  this.cityList.set([...this.cityList(),'gujart']); //this is how we add value to a list signal
}                   // ...->sprade operator, this.cityList() -> to bring origianl data.then add new city.
                    // same for singnal object


// object with signal
stuObj = signal({
  name :'tomar',
  city : 'gujarat'
});

//change city on button click

changecity(){
  this.stuObj.set({...this.stuObj(),city:'jaipur'});
}


}