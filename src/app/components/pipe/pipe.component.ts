import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../Pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
// UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe
  firstName : string = "This is demo";

  currentDate : Date = new Date();

  // for jsonpipe
  Student : any ={
    id : 1,
    name : "tarun",
    city : "jaipur",
    state : ''
  }

  //for asyncpipe

  currentTime : Observable<Date> = new  Observable<Date>;

  constructor(){
    this.currentTime = interval(1000).pipe(map(()=> new Date()));
  }
 }
