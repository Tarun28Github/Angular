import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  apiUrl : string ="https://jsonplaceholder.typicode.com/";

  getAllUser(){
    debugger;
    return this.http.get(this.apiUrl+"users");//concatination
  }

  saveUser(obj : any){
    debugger;
    return this.http.post(`${this.apiUrl}newDepartment`,obj);//stirng literal `${}`
  }

  // we can write any reusable code to service ex
  addtwonum(num1: number, num2 :number){
    return num1 + num2 ;
  }
}
