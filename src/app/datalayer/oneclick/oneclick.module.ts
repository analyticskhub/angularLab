import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneclickRouting} from './oneclick.routing'
import { OneclickHomeComponent } from './home/home.component';
import { OneclickpatternComponent } from './oneclickpattern/oneclickpattern.component';
import {OneclickService} from './service/oneclickservice.service';
import {NewformnameService} from './service/newformname.service';

import {LayoutModule} from '../../layout/layout.module';
import { NewformnamesComponent } from './newformnames/newformnames.component';



@NgModule({
    imports: [
        CommonModule,
        OneclickRouting, 
        LayoutModule

    ],
    declarations: [
        OneclickHomeComponent,
        OneclickpatternComponent,
        NewformnamesComponent
    ],
    exports: [OneclickHomeComponent, OneclickpatternComponent],
    providers: [OneclickService, NewformnameService]
})
export class OneclickModule { }
