import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RxjsService } from '../../service/rxjs.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  selectedRole : string = '';

  http = inject(RxjsService);

  onRoleChange(role : string){
    debugger;
    this.http.onRoleChange$.next(role);
    this.http.onRoleChangeBS$.next(role);
  }


  router2 = inject(Router);
   loggedUserData : any;
  constructor(){
    const loggedData =  localStorage.getItem('LoginUser');
    //always check if loggedData is null or not

    if(loggedData != null){
      this.loggedUserData = JSON.parse(loggedData);

    }
  }
  onLogoff(){
    localStorage.removeItem('LoginUser');
    this.router2.navigateByUrl('login');

  }

}
