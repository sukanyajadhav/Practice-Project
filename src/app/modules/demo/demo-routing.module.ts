import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfComponent } from './pages/ng-if/ng-if.component';

const routes: Routes = [
  
  
  {
  path:'ng-if',component:NgIfComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
