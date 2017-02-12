import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }         from '@angular/core';

//import the core components from components directory
import {DashboardComponent} from './dashboard/dashboard.component';
//import {NotfoundComponent} from './NotFound/notfound.component';


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'datalayer/playground', loadChildren: './datalayer/playground/playground.module#PlaygroundModule' },
    { path: 'datalayer/oneclick', loadChildren: './datalayer/oneclick/oneclick.module#OneclickModule' },
    { path: 'datalayer/oregon', loadChildren: './datalayer/oregon/oregon.module#OregonModule' },
    //{ path: '**', component: NotfoundComponent }, //always last
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

