import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {
// xyz:any[]=[

// ]
marksForm!:FormGroup;
grade!:string;
  constructor(private formbuilder:FormBuilder) {
   this.marksForm=formbuilder.group({
    sub1:['',[Validators.pattern('^[0-9]*$')]],
    sub2:['',[Validators.required,Validators.max(100),Validators.min(0)]],
    sub3:['',[Validators.required,Validators.max(100),Validators.min(0)]],
    sub4:['',[Validators.required,Validators.max(100),Validators.min(0)]],
    sub5:['',[Validators.required,Validators.max(100),Validators.min(0)]]

  });

    // this.xyz=['sukanya','smita','sachin','rupali']
  }
  ngOnInit(): void {
  }
  store(){
let addition=this.marksForm.controls['sub1'].value+
 this.marksForm.controls['sub2'].value +
 this.marksForm.controls['sub3'].value +
 this.marksForm.controls['sub4'].value + 
 this.marksForm.controls['sub5'].value
let percentage=addition/5
if(percentage>70){
  this.grade='A'
}else if(percentage>60 && percentage<70){
this.grade='B'

  }else if(percentage>50 && percentage<60){
this.grade='C'
  }else{
this.grade='D'
  }
}
}
