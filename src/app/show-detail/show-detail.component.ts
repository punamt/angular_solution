import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ShowService } from '../show.service';

import { FormControl,Validators } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  search= new FormControl('',[Validators.minLength(3)])
  

  @Output() searchEvent=new EventEmitter<string>();

 
 
  constructor(private showService:ShowService) { }

  getErrorMessage(){
    return this.search.hasError('minlength') ? 'Type more than 3 characters to search.': '';
  }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((data : string)=>
       { 
        if(!this.search.invalid){
            this.searchEvent.emit(data)
        }
      }
    )

    }
 
}

