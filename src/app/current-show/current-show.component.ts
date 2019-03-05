import { Component, OnInit, Input } from '@angular/core';
import { ShowService } from '../show.service';
import { IShowmap } from '../ishowmap';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {

 @Input() current:IShowmap[];
  
 
 
  
  

  constructor(private showService:ShowService) {
    
   }

  


  ngOnInit()  { 
  
}
       

  

}
