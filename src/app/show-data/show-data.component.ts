import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { IShowmap } from '../ishowmap';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import {Observable} from 'rxjs'



@Component({
  
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

 pageTitle:"routing page"  
  currentShow:IShowmap;
 //currentShow:Observable<IShowmap>;
 
 errorMessage: string='Information is not present!!! ';
   
  constructor(private route:ActivatedRoute,private router:Router, private showService:ShowService) {
    
   }

   

  ngOnInit() {
   
    const  param = this.route.snapshot.paramMap.get('id');
    
   console.log(param);
    if(param){
      const id= +param;
      this.getShowData(id);
     }
   
  }

  

  getShowData(id:number):void{
    this.showService.getShow(id).subscribe(
      currentShow  => {this.currentShow = currentShow,   //currentShow  is the response object from server this is assigning
        error => this.errorMessage = <any>error 
                                          }                                
        );
    }
    
    onBack():void {
      this.router.navigate(['/current-show']);
    }

    

}
 
  


