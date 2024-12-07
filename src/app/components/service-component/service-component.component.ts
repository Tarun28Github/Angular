import { Component, inject } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.css'
})
export class ServiceComponentComponent {

 userSer = inject(UserServiceService);

  userList : any [] = [];
  getUser(){
    debugger;
    this.userSer.getAllUser().subscribe((res:any)=>{
      debugger;
      this.userList=res; //because this api returns list directly
    })
  }

  // similarly for saving user

  
  saveUser(obj : any){
    this.userSer.saveUser(obj).subscribe((res: any)=>{
      if(res.isuserSaved){
        alert("user save successfully");
      }
    }, error=>{
      alert('error occure');
    })
  }
 
    
  
}
