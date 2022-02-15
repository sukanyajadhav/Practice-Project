import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgswitchComponent } from './pages/ngswitch/ngswitch.component';

const routes: Routes = [{
  path:'ngswitch',component:NgswitchComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
