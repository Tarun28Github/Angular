import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AlertComponent } from '../../reuseable_component/alert/alert.component';

@Component({
  selector: 'app-ng-life-cycle',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './ng-life-cycle.component.html',
  styleUrl: './ng-life-cycle.component.css'
})
export class NgLifeCycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  field : string ;

  alertmsg : string ='';

  changemsg(){
    debugger;
    this.alertmsg = 'hi tarun';
  }
  constructor(){  // constructor always execute first and basically it is use to initialize the field or element which we create.
    console.log('constructor');
    this.field = '';

    //we cant call api in constructor but we can call it inside a funtion and call that function in constructor.

  }
//these all method execute automatically
  ngOnInit(): void {
      console.log("ngOnInit"); //it is used to call api. basically it is use so that we can call automatically.
  }
  ngOnChanges(changes: SimpleChanges): void { // is execute when a child component is present ie we have to create this method in child componetent ts file.	Runs every time the component's inputs have changed.
    debugger;
    console.log('onchanges');
  }
  ngDoCheck(): void {//	Runs every time this component is checked for changes.
      console.log('docheck');
  }
  ngAfterContentInit(): void { //Runs once after the component's content has been initialized.
      console.log('aftercontentInit');
  }
  ngAfterContentChecked(): void {//Runs every time this component content has been checked for changes.
      console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {//	Runs once after the component's view has been initialized.
      console.log('afterViewInit');
  }
  ngAfterViewChecked(): void {//Runs every time the component's view has been checked for changes.
      console.log('afterViewChecked');
  }
  ngOnDestroy(): void {//	Runs once before the component is destroyed.
      console.log('Ondestroy');
  }

}


