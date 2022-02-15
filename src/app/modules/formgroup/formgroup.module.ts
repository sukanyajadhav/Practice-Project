import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormgroupRoutingModule } from './formgroup-routing.module';
import {MatSelectModule} from '@angular/material/select'; 
import { FormComponent } from '../pages/form/form.component';
import {MatRadioModule} from '@angular/material/radio'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
@NgModule({
  declarations: [
    FormComponent
  ],
  
  imports: [
    CommonModule,
    FormgroupRoutingModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class FormgroupModule { }
