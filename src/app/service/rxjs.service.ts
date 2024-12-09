import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  // creating subject. syntax
// subjectNamewith$ : subject<datatype> (of the value u r going to hold/ use any if u dont know the value datatype) = new  subject<same datatpe>; 
  
  onRoleChange$ : Subject<string> = new Subject<string>; // here $ in name represent that this variable will store observable value. subject is an datatype of observable so we always use $ with name.

  onRoleChangeBS$ : BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }
}
