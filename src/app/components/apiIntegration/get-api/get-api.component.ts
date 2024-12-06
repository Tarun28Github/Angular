
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  // first add (provideHttpClient) inside provider in appconfig 
  //then  creating object of httpclient 
   
  //their are two ways  using contructor or using inject method

  constructor(private http: HttpClient ){

  }

  //using inject() method
  //http = inject(HttpClient);

  //creating  function

  userList : any [] = [];
  coustomerList : any [] = [];
  getAllUser(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList=res; //because this api returns list directly
    })
  }

  getAllCustomers(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
     debugger;
      this.coustomerList = res.data; //because this api retuns an objest and list is inside data 
    },error=>{
      debugger;
      // if any error occure while calling the api this error block will execute
    })
    
  }

}
