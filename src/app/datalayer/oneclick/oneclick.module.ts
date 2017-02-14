import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneclickRouting} from './oneclick.routing'
import { OneclickHomeComponent } from './home/home.component';
import { OneclickpatternComponent } from './oneclickpattern/oneclickpattern.component';
import {OneclickService} from './service/oneclickservice.service'

import {LayoutModule} from '../../layout/layout.module';



@NgModule({
    imports: [
        CommonModule,
        OneclickRouting, 
        LayoutModule

    ],
    declarations: [
        OneclickHomeComponent,
        OneclickpatternComponent
    ],
    exports: [OneclickHomeComponent, OneclickpatternComponent],
    providers: [OneclickService]
})
export class OneclickModule { }
