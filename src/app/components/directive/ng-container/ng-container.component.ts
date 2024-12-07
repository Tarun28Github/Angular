import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  isContainer : boolean = true;

 constructor(private http: HttpClient){
  
 }
  user : any [] = [];
  isApi : boolean =false
  load(){
    this.isApi= true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
     
      this.user = res;
      this.isApi=false;
    })
  }
}
