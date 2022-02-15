import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgswitchComponent } from './pages/ngswitch/ngswitch.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import { ReactiveFormsModule } from '@angular/forms';
import { StructureRoutingModule } from './structure-routing.module';
import {MatInputModule} from '@angular/material/input'; 
@NgModule({
  declarations: [
    NgswitchComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    StructureRoutingModule,
    MatInputModule
  ],
})
export class StructureModule { }
