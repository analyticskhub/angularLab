import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OregonRouting} from './oregon.routing'
import { OregonHomeComponent } from './home/home.component';


@NgModule({
    imports: [
    CommonModule, 
    OregonRouting
    ],
    declarations: [
        OregonHomeComponent
    ],
    exports: [OregonHomeComponent],
    providers: []
})
export class OregonModule { }
