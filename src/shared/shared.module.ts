import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MouseHandlerDirective } from './mouse-handler/mouse-handler.directive';
import { HslBaseComponent } from './hsl/hsl-base.component';
import { ColorUtilityService } from './color-utility/color-utility.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MouseHandlerDirective,
    ],
    exports: [
        MouseHandlerDirective,
    ],
    providers: [
        ColorUtilityService,
    ],
})
export class SharedModule { }
