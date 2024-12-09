import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../reuseable_component/alert/alert.component';

@Component({
  selector: 'app-view-chield',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-chield.component.html',
  styleUrl: './view-chield.component.css'
})
export class ViewChieldComponent implements AfterViewInit {

  @ViewChild('txt') textbox?: ElementRef; // for element we give name that element and use ElementRef ie refrence of the element to catch it.
  @ViewChild(AlertComponent) myalert?: AlertComponent; // to catch an component element like alert we use its Component name to catch it.


 ngAfterViewInit(): void {
    const value = this.textbox?.nativeElement.value;  
    const value1 = this.myalert?.alertMode; // a field in alert.ts
     debugger;
  }

}
