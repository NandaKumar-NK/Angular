import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
 export class ReactiveformsComponent {
//   ngOnInit(): void {implements OnInit
//     throw new Error('Method not implemented.');
//   }

//   validateForm = new FormGroup
//   ({
//     firstname: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("^[a-zA-Z]+$")]),
//     // firstname: new FormControl("Rahul"),
//     // firstname: new FormControl({ value: "Rahul", disabled: true} ),

//     lastname: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),

//     email: new FormControl('',[Validators.required,Validators.email]),
//     gender: new FormControl(),
//     isMarried: new FormControl(),
//     country: new FormControl()
//   })

//   get firstname(){
//     return this.validateForm.get('firstname');
//   }
 
 
//   saveForm() {
//     console.log("submit");
//     console.log(this.validateForm.value);
//   }
// }

// validateform! : FormGroup;
// constructore(private fb:FormBuilder){}       //form builder acts as intermediary
// ngOnInit() {
//        this.validateform=this.fb.group({
//         pagename:['',Validators.required],
//         myURL: ['',[Validators.required,ValidateUrl]]
//        })
//   }

  

}