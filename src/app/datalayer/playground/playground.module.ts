import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgRouting } from './pg.routing';

import { PlaygroundHomeComponent } from './home/home.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
    imports: [
    CommonModule,// ngFor, ngIf directives
    PgRouting,
    LayoutModule
    ],
    declarations: [
        PlaygroundHomeComponent
    ],
    exports: [PlaygroundHomeComponent],
    providers: []
})
export class PlaygroundModule { }
