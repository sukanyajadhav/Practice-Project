import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/demo/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'demo/ng-if',pathMatch:'full'
  },
  {
    path:'demo', loadChildren:() => import('./modules/demo/demo.module').then (m=>m.DemoModule)
  },
  {
    path:'structure', loadChildren:() => import('./modules/structure/structure.module').then (m=>m.StructureModule)
  },
  {
    path:'array', loadChildren:() => import('./modules/array/array.module').then (m=>m.ArrayModule)
  },
  {
    path:'formgroup', loadChildren:() => import('./modules/formgroup/formgroup.module').then (m=>m.FormgroupModule)
  },

  {
    path:'shared', loadChildren:() => import('./modules/shared/shared.module').then (m=>m.SharedModule)
  },
  {
    path:'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
