import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneclickRouting} from './oneclick.routing'
import { OneclickHomeComponent } from './home/home.component';
import { OneclickpatternComponent } from './oneclickpattern/oneclickpattern.component';


@NgModule({
    imports: [
        CommonModule,
        OneclickRouting
    ],
    declarations: [
        OneclickHomeComponent,
        OneclickpatternComponent
    ],
    exports: [OneclickHomeComponent, OneclickpatternComponent],
    providers: []
})
export class OneclickModule { }
