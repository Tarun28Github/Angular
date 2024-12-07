import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {

 
 @Input() message : string = '';

 @Input() classtype : string = '';


 ngOnChanges(changes: SimpleChanges): void {
     console.log('onChanges'); // it execute afterContentChecked is executed.
 }

}
