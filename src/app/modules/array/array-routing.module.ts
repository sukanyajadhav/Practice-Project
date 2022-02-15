import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormarrayComponent } from './formarray/formarray.component';
import { NgForComponent } from './ng-for/ng-for.component';

const routes: Routes = [
  {
    path:'formarray',component:FormarrayComponent,
  },

  {
    path:'ngFor',component:NgForComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayRoutingModule { }
