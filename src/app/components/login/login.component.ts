import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj : any={
    userName : '',
    password : ''
  }

  router = inject(Router);
 
//this is  hard code or static login 
  // onLogin(){
  //   if(this.userObj.username == 'admin' && this.userObj.password == '1234'){
  //     alert('login successul');
  //     localStorage.setItem('loginUser',this.userObj.username);
  //     this.router.navigateByUrl('add_employee');
  //   }
  //   else{
  //     alert('invalid credential');
  //   }

  // }

  // Login with api

  http = inject(HttpClient);

  onLogin(){
    this.http.post("https://projectapi.gerasim.in/api/CollegeProject/login", this.userObj).subscribe((res : any)=>{
      if(res.result){
        debugger;
        alert(res.message);
        localStorage.setItem('LoginUser',JSON.stringify(res.data)); // stringify method will convert data in to string .we save string data in localstorage;
        this.router.navigateByUrl('add_employee');
      }
      else{
        debugger;
        alert(res.message);
      }
    })
  }

 

}
