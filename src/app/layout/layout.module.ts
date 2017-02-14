import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { Routes, RouterModule } from '@angular/router';

//import { routing, appRoutingProviders } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
    //routing
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
  ],
    exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    ],
    providers: []
})
export class LayoutModule { }
