import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneclickRouting} from './oneclick.routing'
import { OneclickHomeComponent } from './home/home.component';


@NgModule({
    imports: [
        CommonModule,
        OneclickRouting
    ],
    declarations: [
        OneclickHomeComponent
    ],
    exports: [OneclickHomeComponent],
    providers: []
})
export class OneclickModule { }
