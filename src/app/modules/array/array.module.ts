import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayRoutingModule } from './array-routing.module';
import { FormarrayComponent } from './formarray/formarray.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgForComponent } from './ng-for/ng-for.component';
@NgModule({
  declarations: [
    FormarrayComponent,
    NgForComponent
  ],
  imports: [
    CommonModule,
    ArrayRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
    
  ]
})
export class ArrayModule { }
  