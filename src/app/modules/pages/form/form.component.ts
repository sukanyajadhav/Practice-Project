import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 

  xyz: FormGroup;
  constructor(private formbuilder:FormBuilder) { 
this.xyz=formbuilder.group({
fName:['',Validators.required],
lName:['',Validators.required],
country:['',Validators.required],
state:['',Validators.required],
gender:['',Validators.required],
mobNo:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
email:['',[Validators.required,Validators.email]],
age:['',[Validators.required,Validators.max(100),Validators.min(18)]],
})
  }
  ngOnInit(): void {
     
  }

  resetForm(){
  
  }
  onClick(){
    localStorage.setItem('user',JSON.stringify(this.xyz.getRawValue()));

  }

}


