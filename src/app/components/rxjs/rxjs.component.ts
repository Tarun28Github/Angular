import { Component } from '@angular/core';
import { RxjsService } from '../../service/rxjs.service';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

  /** what is the use of subject and behaviorsubject of rxjs ?
   * Suppose their are Two component and their is no relation ship 
   * (like parent child,etc) between these component. And we  want that 
   * if we make a change in one component ,automatically the other component also get chages
   * according to it. Then in this senario we use subject and behaviorSubject.
   * 
   */
   
  /**
   * Under standing with example. We have a layout comp and a rxjs comp.
   * Our navbar is in layout comp and we had created a  select Role colm in that nav bar.
   * now i want  that when  i select user role  some change should be shown in rxjs component.
   * and if i select guest role  some other change should be shown. Now thier is any kind of relationship in btw these
   * two component and the change would be just show user or guest on rxjs.
   */

  // lets see how we do this.

  //step 1 create a subject. Generally we create a subject in a service because a service can be used in both components.
  //i have created a rxjs service inside it will create a subject.

  //step 2 : to make change in rxjs comp on selection of the role we will create a function on selectbtn in navbar.
  //since its an selectfied we will use onChange attribute or we can use (ngModleChange) of ngModel but it will only work if we have use [(ngModel)] and we had bind it with ngmodel.
  // also we will bind it with a variable. In this we have used $event inside a funcion . it is not necessay we can also use variable with we have bind it.

  //step 3 : using function  we will send the change value to the subject using next() of subject by injecting the service and calling the subject.
  // ie this.rxserv.onRoleChange$.next(value);

  // step 4 : get the value form subject in rxjs componect using subscribe()  , by injecting service in rxjs comp.
 // fetch it inside a constructor so that we can make change when page loaded.
  


  /**
   * IMPORTANT  for sending value to subject/behaviorsubject we create function.
   * But to subscribe or fetch value  either fetch it inside a construcor or ngOnInIt or ngAfterViewInit.
   * use any of the three to subscribe.
   * 
   * their is one disadvantage of both on reload page the change will remove because we had not selected the role.
   */
  role : string ='';
  roleBs : string ="";
  
  constructor(private http : RxjsService){// since we are using constructor.
    
    this.http.onRoleChange$.subscribe((res : string)=>{
      debugger;
      this.role = res;
    });
     
    this.http.onRoleChangeBS$.subscribe((res : string)=>{
      debugger;
      this.roleBs = res;
    })
    

  }


  /**
   * Now we see why we had to create behaviorsubject and the cons of subject.
   * suppose i am fetching the change value in another component ex ifelse comp.
   * now when i refresh the page or make chnage the change will shown only on the component in which we are present and when we go to other comp it does not show change.
   * ie. i had fetch the role in two comp one is rxjs comp and other is ifelse comp.
   * if i am at ifelse comp and i change the role . the change role will show on ifelse componet and when i go to he rxjs comp change will not show or the fetch code does not execute.
   * 
   * We want when ever we make change on layout comp. All comp in which we had fetch data get chnage or the code of fectch data in all comp get execute , doesnt matter on which  comp we 
   * we are at.
   * So this was the drawback of subject and to overcome it we use behaviorsubject.
   */
  

  // step1 : create behaviorsubject  in service. while creating subject we dont initialize it but 
  // we initialize the behaviorsubject (with default value);
  // rest is same just like subject.
  // step 2 : send value with to behaviorsubject using next in the rolechange method.
  //step4 : then fecht the value in both compt ie. rxjs, ifelse , using subcribe.


   
}
