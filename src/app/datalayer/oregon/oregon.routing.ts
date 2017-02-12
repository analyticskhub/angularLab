import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';


//import the core components from components directory
import {OregonHomeComponent} from './home/home.component'


const OregonRoutes: Routes = [
  {
    path: "",
    component: OregonHomeComponent,
    children: [
      /*
      { path: "", component: SubHomeComponent }
      */
    ]
  },
];

export const OregonRouting: ModuleWithProviders = RouterModule.forChild(OregonRoutes);