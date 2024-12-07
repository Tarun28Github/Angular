import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

  isUserLoggedIn : boolean = false;
  loggedInUserName : string = "diraj";

  @ViewChild('dynamictem') dynamicTem: TemplateRef<any> | undefined
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dynaCont : ViewContainerRef | undefined


  loadTemplate(){
    if(this.dynamicTem){
      this.dynaCont?.createEmbeddedView(this.dynamicTem)
    }
    
  }
}
