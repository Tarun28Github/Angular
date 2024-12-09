import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-changedetection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './changedetection.component.html',
  styleUrl: './changedetection.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChangedetectionComponent implements OnInit {
  /**
   * what is changedetection ?
   * when ever we change a variable value or update value the program re render the Ui to show the 
   * updated value of a variabe. this process of re-render is chnage detection.
   * 
   * What is zone.js?
   * It is a library chnage detection is done by zone.js. But now due to some disadvantage angular is removing zone.js
   * signal is introduce to overcome disadvantage of zone.js
   * 
   * Change detection cycle?
   * first detect chnage , initiate cycle and re render the ui
   * 
   * keyvaluediffers & itrabaldiffer?
   * Here i have changed the value of test , this test is keyvalueDiffers
   * and i have used for loop so  this loop is in itration form , so its item (maybe) itrablediffer
   * 
   * ChangeDetection type
   * two type 1. default(changedetection enable) 2.onpush(change detection disable)
   * in component attribute above the class if on change detecion present means its default.
   * means it will render when it detect change.ex test value get chnage form html to java.
   * 
   * if changeDetection is in onpush mode then test value will chnage in backent but it will not render
   * or show  in front end. also we get the data form api in backend but did not show in frontend.
   * 
   * Now if changeDetecion is onpush mode in that case we have to manually rerender the ui
   * 
   * their are differt wey to rerender ui
   * create a funcion and call it on btn click.ex reload ui basically when we call fn somechnage detected and it will re render the ui to show those chnage
   * it will show all the chnages.
   * 
   * Anothers way is we can use changedetect method of ChangeDetectorRef service .
   * for that first we create obj of this service in constructor than call the method
   * 
   * or we can use a signal. because their is no effect of changedetction onpush mode on signal it will still rerender and update all other values.
   */






  test: string = 'html';
  http= inject(HttpClient);
  // userList : IUserList[]=[] ;

  userList = signal<any[]>([])

  constructor(private cdRef : ChangeDetectorRef){

  }

  ngOnInit(): void {
      this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res: any)=>{
        // this.userList = res.data;
        
        // this.cdRef.detectChanges();
        this.userList.set(res.data);

        this.test= 'java';
      })
  }
  reloadUi(){

  }
}
