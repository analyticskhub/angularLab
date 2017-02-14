import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {LayoutModule} from '../layout/layout.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        LayoutModule
    ],
    providers: [
        
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {}