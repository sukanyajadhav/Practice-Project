import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {
  form: any;
// form!: FormGroup;


   constructor(private fb:FormBuilder) {
    this.form =fb.group({
     firstName:['',Validators.required],
     lastName:['',Validators.required],
      education: this.fb.array([])
    });
  } 


  ngOnInit(): void {
    
     
    
  }

  get education() {
    return this.form.controls["education"] as FormArray;
  }

  addLesson() {
    const educationForm = this.fb.group({
      standard: ['', Validators.required],
      year: [' ', Validators.required],
      marks: [' ', Validators.required]
      
    });
    this.education.push(educationForm);
  }
  deleteLesson(index: number) {
    this.education.removeAt(index);
}
save(){
  console.log(this.form.getRawValue());
  
}
}
