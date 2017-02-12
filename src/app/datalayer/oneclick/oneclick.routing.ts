import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';


//import the core components from components directory
import {OneclickHomeComponent} from './home/home.component'


const OneclickRoutes: Routes = [
  {
    path: "",
    component: OneclickHomeComponent,
    children: [
      /*
      { path: "", component: SubHomeComponent }
      */
    ]
  },
];


export const OneclickRouting: ModuleWithProviders = RouterModule.forChild(OneclickRoutes);