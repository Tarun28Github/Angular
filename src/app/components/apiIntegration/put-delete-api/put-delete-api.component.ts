import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-delete-api',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './put-delete-api.component.html',
  styleUrl: './put-delete-api.component.css'
})
export class PutDeleteApiComponent {

 http = inject(HttpClient);

  userList : any [] =[
    {
      id :1,
      email :'a@gmail.com',
      password : 'aaa'
    },
    {
      id :2,
      email :'b@gmail.com',
      password : 'bbb'
    },
    {
      id :3,
      email :'c@gmail.com',
      password : 'ccc'
    }
  ]
  userObj : any = {
    email : '',
    password :''
  }
  
  //for updateing user we need the object of that puticular user on the form 

  onEdit(item :any){
     this.userObj = item;
  }

  

  updateUser(){
    debugger;
    this.http.put("",this.userObj).subscribe((res: any)=>{
      debugger;
      if(res.isUserSave){
       alert('user successfully update')
      }else{
        alert('error')
      }
    },error =>{

    })
  }


  //for deleteing user  we just want he id of that user

  deleteUser(userId : number){
    debugger;
    this.http.delete("api/deleteuser?id="+userId).subscribe((res: any)=>{
      debugger;
      if(res.isUserDeleted){
      alert('success')
      }else{

      }
    })
  }

}
