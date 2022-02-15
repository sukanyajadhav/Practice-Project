import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SharedModule { }
