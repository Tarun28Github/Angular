import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent {
    http = inject(HttpClient);
   //to use put api first create obj for form and link its componet using ngform
    userObj : any = {
      email : '',
      password :''
    }


    saveuser(){
      debugger;
      this.http.post("putapi",this.userObj).subscribe((res: any)=>{
        if(res.isUserSaved){
          alert('user saved');
          this.getAllUser();
        }
        else{
        
          alert("error");
        }
      }, error=>{
        //handling error
      })
    }
    userList: any [] = [];
    getAllUser(){
      this.http.get("").subscribe((res : any)=>{
        this.userList = res;
      })
    }
// this is how we use post api and get api. we wont run this program because we dont have any post api here.
    
}

