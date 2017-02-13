import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';


//import the core components from components directory
import {OneclickHomeComponent} from './home/home.component'
import { OneclickpatternComponent } from './oneclickpattern/oneclickpattern.component';

const OneclickRoutes: Routes = [
  {
    path: "",
    component: OneclickHomeComponent,
  },
  {
    path: "data/wow/usecase/:type",
    component: OneclickpatternComponent,
  },
];


export const OneclickRouting: ModuleWithProviders = RouterModule.forChild(OneclickRoutes);