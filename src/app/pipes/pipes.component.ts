import { Component } from '@angular/core';
//import{Pipe,PipeTransform} from '@angular/core';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
 
    currentDate = new Date();
   emoji={
    'id':'c1'
   }
   course={
    "name":"nanda",
    "id":"2324"
   }
   namesarray=['aaa','bbb','abc','bkc']
  
}
