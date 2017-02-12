import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';


//import the core components from components directory
import {PlaygroundHomeComponent} from './home/home.component'


const PgRoutes: Routes = [
  {
    path: "",
    component: PlaygroundHomeComponent,
    children: [
      /*
      { path: "", component: SubHomeComponent }
      */
    ]
  },
];

export const PgRouting: ModuleWithProviders = RouterModule.forChild(PgRoutes);

