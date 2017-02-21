import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';


//import the core components from components directory
import {OneclickHomeComponent} from './home/home.component'
import { OneclickpatternComponent } from './oneclickpattern/oneclickpattern.component';
import { NewformnamesComponent } from './newformnames/newformnames.component';

const OneclickRoutes: Routes = [
  {
    path: "",
    component: OneclickHomeComponent,
  },
  {
    path: "usecase/:journey/:step",
    component: OneclickpatternComponent,
  },
    {
    path: "newformnames",
    component: NewformnamesComponent,
  },
];


export const OneclickRouting: ModuleWithProviders = RouterModule.forChild(OneclickRoutes);